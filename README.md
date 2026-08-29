# Sakura Tools

一个面向日常高频任务的个人工具站。首版包含 JSON 格式化、Base64 编解码、时间戳转换和随机密码生成器；基础转换尽量在浏览器本地完成。

## 架构

```text
浏览器
  │
宿主机 Nginx（sakurano.xyz）
  │ 127.0.0.1:8088
Podman app（直接由 Podman 管理，FROM scratch，无基础镜像）
  ├── /            → Gin 提供 Vue 3 静态文件
  ├── /api/v1/*    → Gin API
  └── /app/data    → SQLite 命名卷
```

前端与后端仅通过 `/api/v1` 通信。宿主机只暴露回环地址上的 `8088`，应用端口不直接对公网开放。SQLite 数据保存在 Podman 命名卷 `sakura-tools-data` 中。

服务器无需访问 Docker Hub：Vue 在本地构建，服务器使用已经安装的 Go 1.25 编译后端，Podman 的 `scratch` 容器只封装这两份本地产物。

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
├── scripts/deploy.sh     # 服务器编译与部署脚本
├── Containerfile         # FROM scratch，不拉取基础镜像
└── compose.yaml          # 可选的 podman-compose 编排参考
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

### 提交前端构建产物

服务器没有 Node.js，也无法拉取 Node 容器镜像，因此每次修改前端后，都要在本地构建并把 `frontend/dist` 一起提交：

```bash
cd frontend
npm ci
npm run build
cd ..
git add frontend/dist frontend/src
git commit -m "更新前端"
git push
```

`frontend/dist` 中的文件名包含内容哈希，浏览器可以安全缓存；不要手动编辑这些生成文件。

## 首次服务器部署

以下命令在 Alibaba Cloud Linux 3 上执行。假设仓库已克隆到 `/opt/sakura-tools`，服务器已安装 Go 1.25.7 和 Podman。部署脚本直接调用 Podman，不依赖旧版 `podman-compose` 的状态管理。

```bash
cd /opt/sakura-tools
cp .env.example .env
bash scripts/deploy.sh
```

部署脚本依次执行：

1. 使用服务器已有的 Go 编译 `backend/server`；构建时关闭项目未使用的 Gin MsgPack 支持并限制为单包并行，以降低 2 GB 服务器的峰值内存；
2. 使用 `FROM scratch` 构建 `localhost/sakura-tools:latest`，不下载任何基础镜像；
3. 保留 `sakura-tools-data` 数据卷、替换 `sakura-tools-app` 容器并请求健康检查接口。

如果服务器不是常见的 x86_64/amd64 架构，可在部署时指定，例如 ARM64：

```bash
DEPLOY_GOARCH=arm64 bash scripts/deploy.sh
```

安装宿主机 Nginx 配置前，先备份并检查是否已有同名 `server_name`：

```bash
sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
sudo grep -RIn "server_name.*sakurano.xyz" /etc/nginx
```

如果没有结果，才复制完整配置：

```bash
sudo cp nginx/sakurano.xyz.conf /etc/nginx/conf.d/sakurano.xyz.conf
sudo nginx -t
sudo systemctl reload nginx
```

如果已有结果，不要复制新的同名配置。编辑原有 `server` 块，将 `nginx/sakurano.xyz.conf` 中的 `location /` 和 `location = /healthz` 合并进去，再运行 `nginx -t` 和 reload；HTTPS server 块也采用相同处理。确认新站可用后，旧目录 `/var/www/sakurano.xyz` 可以保留一段时间作为回滚备份。

## 日常发布

```bash
cd /opt/sakura-tools
git pull --ff-only
bash scripts/deploy.sh
```

查看状态和日志：

```bash
podman ps --filter name=sakura-tools-app
podman logs --tail=100 sakura-tools-app
```

回滚时切回已验证的 Git 提交，再运行 `bash scripts/deploy.sh`。SQLite 命名卷不会随容器重建删除；不要执行 `podman volume rm sakura-tools-data`，除非明确需要删除数据库。

## 扩展约定

- 每个前端工具使用稳定 slug，并在 `frontend/src/data/tools.js` 注册。
- 可用工具页面放在 `frontend/src/components/tools/`，不把所有逻辑堆进首页。
- API 使用 `/api/v1` 前缀；业务代码放入 `backend/internal`。
- 不记录用户输入内容。当前数据库只按工具聚合匿名打开次数，表大小不会随访问量持续增长。
- 大文件工具必须设置大小限制、超时和临时文件清理策略；2 核 2G 环境不要把 PDF/图片任务无限并发。
