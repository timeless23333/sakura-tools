# Sakura Tools

一个面向日常高频任务的个人工具站。首版包含 JSON 格式化、Base64 编解码、时间戳转换和随机密码生成器；基础转换尽量在浏览器本地完成。

## 架构

```text
浏览器
  │
宿主机 Nginx（sakurano.xyz）
  │ 127.0.0.1:8088
Podman frontend（Vue 静态文件 + 内部 Nginx）
  ├── /            → Vue 3 SPA
  └── /api/*       → backend:8080
                         │
                     Gin + SQLite
```

前端与后端仅通过 `/api/v1` 通信。宿主机只暴露回环地址上的 `8088`，后端端口不对公网开放。SQLite 数据保存在 Podman 命名卷 `sakura_data` 中。

## 目录

```text
sakura-tools/
├── frontend/             # Vue 3 + Vite
│   ├── src/components/tools
│   ├── src/data
│   └── src/views
├── backend/              # Go 1.25 + Gin + SQLite
│   ├── cmd/server
│   └── internal
├── nginx/                # 宿主机 Nginx 配置示例
└── compose.yaml          # podman-compose 编排
```

增加工具时，优先把纯文本、编码、颜色等逻辑放在浏览器端；只有翻译、持久化、重型文件处理或需要隐藏密钥时才进入 Go API。这样可以降低服务器 CPU、内存与带宽压力。

## 本地开发

要求：Node.js 22+、Go 1.25+。

```bash
# 终端 1：后端
cd backend
go run ./cmd/server

# 终端 2：前端
cd frontend
npm install
npm run dev
```

打开 `http://localhost:5173`。Vite 会把 `/api` 代理到 `http://localhost:8080`。

验证：

```bash
cd frontend && npm run build
cd ../backend && go test ./...
```

## 首次服务器部署

以下命令在 Alibaba Cloud Linux 3 上执行。假设仓库已克隆到 `/opt/sakura-tools`。

```bash
cd /opt/sakura-tools
cp .env.example .env
podman-compose up -d --build
curl http://127.0.0.1:8088/api/v1/health
```

安装宿主机 Nginx 配置前，先备份现有配置并检查是否已有同名 `server_name`：

```bash
sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
sudo cp nginx/sakurano.xyz.conf /etc/nginx/conf.d/sakurano.xyz.conf
sudo nginx -t
sudo systemctl reload nginx
```

如果 `sakurano.xyz` 已有 HTTPS server 块，只需把示例中的 `location /` 和 `location = /healthz` 合并到现有 HTTPS server 块；不要重复声明相同域名。确认新站可用后，旧目录 `/var/www/sakurano.xyz` 可以保留一段时间作为回滚备份。

## 日常发布

```bash
cd /opt/sakura-tools
git pull --ff-only
podman-compose up -d --build
podman image prune -f
```

查看状态和日志：

```bash
podman-compose ps
podman-compose logs --tail=100 backend
podman-compose logs --tail=100 frontend
```

回滚时切回已验证的 Git 提交，再运行 `podman-compose up -d --build`。SQLite 命名卷不会随容器重建删除；不要执行 `podman-compose down -v`，除非明确需要删除数据。

## 扩展约定

- 每个前端工具使用稳定 slug，并在 `frontend/src/data/tools.js` 注册。
- 可用工具页面放在 `frontend/src/components/tools/`，不把所有逻辑堆进首页。
- API 使用 `/api/v1` 前缀；业务代码放入 `backend/internal`。
- 不记录用户输入内容。当前数据库只按工具聚合匿名打开次数，表大小不会随访问量持续增长。
- 大文件工具必须设置大小限制、超时和临时文件清理策略；2 核 2G 环境不要把 PDF/图片任务无限并发。
