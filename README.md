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

## 在线翻译配置

在线翻译只通过本站 Go API 代理，不会把服务密钥发送给浏览器，也不会把翻译原文写入 SQLite 或应用日志。

- 未配置密钥时使用 MyMemory 公共接口。其单段上限为 500 UTF-8 字节，后端会按句子自动拆分为最多 16 段。
- 在 `.env` 中设置 `DEEPL_API_KEY` 后自动优先使用 DeepL。以 `:fx` 结尾的 Free API 密钥会使用 `api-free.deepl.com`。
- `MYMEMORY_EMAIL` 是 MyMemory 对高频调用建议提供的联系邮箱，可留空。

```dotenv
DEEPL_API_KEY=
DEEPL_ENDPOINT=
MYMEMORY_EMAIL=
```

部署脚本会自动读取项目根目录的 `.env`，并将宿主机 CA 证书只读挂载进 scratch 容器，以便 Go 后端发起 HTTPS 请求。文本会发送给所选第三方翻译服务，因此翻译页面不会标记为“本地处理”。

## 访问统计（Analytics）

内置一套 privacy-friendly 的轻量统计系统：区分 `page_view`（页面访问）与 `tool_use`（工具核心功能实际使用），支持 PV / UV / 30 天趋势 / 热门工具 / 入口页面 / Referrer / 设备浏览器 OS 分布 / Bot 流量。不引入任何重型组件，全部落在现有 SQLite。

### 数据流

```text
浏览器（src/analytics.js，sendBeacon 非阻塞上报）
  │  POST /api/v1/analytics/collect（限流、校验、Bot 识别）
  ▼
Go 后端：单事务写入 analytics_events（原始事件）+ 按日聚合表
  ▼
Dashboard（/admin/analytics）只读聚合表，每行代表一天
```

- 页面切换由 vue-router `afterEach` 统一上报，工具组件只需在核心功能成功后调用一行 `trackToolUse('slug')`。
- 新工具接入统计：在组件内 `import { trackToolUse } from '../../analytics'` 并在核心操作成功后调用即可，PV 由路由自动统计。
- Bot（Googlebot、扫描器、curl、监控探针等按 UA 识别）只计入 `bot_pv`，不进入 PV/UV。
- `/admin/*` 页面与开发环境（vite dev / localhost）默认不上报；本地调试统计可在控制台执行 `localStorage.setItem('sakura-analytics-dev', '1')`。

### 存储、保留与资源占用

| 表 | 用途 | 保留 |
| --- | --- | --- |
| `analytics_events` | 原始事件（回查/重放用） | 默认 14 天，可配 3–90 天 |
| `analytics_visitors` / `analytics_tool_visitors` | 每日访客集合（UV、新/回访） | 60 天 |
| `analytics_daily` / `analytics_tool_daily` / `analytics_detail_daily` / `analytics_clients` | 按日聚合与访客首见日 | 长期（每天几十行以内） |

后端每 6 小时清理一次过期数据。Dashboard 只查聚合表（主键范围扫描），不扫描原始事件；单条事件写入是一次含约 10 条语句的小事务，2 核 2G 下毫秒级完成，静态资源请求和健康检查不会产生任何统计。

### 隐私方案

- 访客标识：浏览器生成随机 UUID 存于 localStorage（无过期，直到用户清除），服务端以 `HMAC-SHA256(密钥, UUID)` 截断为 64 位散列存储，密钥保存在数据库 `analytics_meta` 中且不外发，无法反推、无任何个人信息。
- 不做浏览器指纹、不保存 IP、不使用 Cookie、不接第三方统计脚本。
- 新访客/回访访客通过该散列的“首见日”判定，只在本站内成立，不构成跨站追踪。

### 管理端 Dashboard

访问 `https://sakurano.xyz/admin/analytics`（不设导航入口，仅管理员使用）：

1. 在服务器 `.env` 中设置令牌：`ANALYTICS_ADMIN_TOKEN=$(openssl rand -hex 24)`；
2. `bash scripts/deploy.sh` 重新部署；
3. 打开页面输入令牌，令牌仅保存在浏览器 sessionStorage，关闭标签页即失效。

未配置令牌时管理接口整体返回 404。时间范围支持 今日 / 7 天 / 30 天。

### 与 Nginx 日志的分工

应用统计只记录“人的行为”（前端主动上报的事件）。Nginx access log 继续承担运维视角：状态码、带宽、异常请求、爬虫扫描等，两者不会重复计数同一次访问。可选：在 Nginx 中对 `/api/v1/analytics/` 关闭 access log 以减少噪音（见 `nginx/sakurano.xyz.conf` 注释）。

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
- 不记录用户输入内容。访问统计只保存随机 ID 的不可逆散列与按日聚合，原始事件定期清理，表大小不随访问量无限增长。
- 大文件工具必须设置大小限制、超时和临时文件清理策略；2 核 2G 环境不要把 PDF/图片任务无限并发。
