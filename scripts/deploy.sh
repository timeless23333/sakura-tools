#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FRONTEND_INDEX="${PROJECT_DIR}/frontend/dist/index.html"
BACKEND_BINARY="${PROJECT_DIR}/backend/server"
DEPLOY_GOARCH="${DEPLOY_GOARCH:-amd64}"

if [[ ! -f "${FRONTEND_INDEX}" ]]; then
  echo "错误：未找到 frontend/dist/index.html。"
  echo "请先在本地运行 npm run build，将 frontend/dist 提交并推送到 Git。"
  exit 1
fi

echo "[1/3] 使用服务器现有 Go 编译 Linux 后端…"
cd "${PROJECT_DIR}/backend"
GOPROXY="${GOPROXY:-https://goproxy.cn,direct}" \
CGO_ENABLED=0 GOOS=linux GOARCH="${DEPLOY_GOARCH}" \
  go build -trimpath -ldflags="-s -w" -o "${BACKEND_BINARY}" ./cmd/server

echo "[2/3] 构建不含基础镜像的 scratch 容器…"
cd "${PROJECT_DIR}"
podman-compose up -d --build

echo "[3/3] 检查服务…"
podman-compose ps
curl --fail --silent --show-error http://127.0.0.1:"${HTTP_PORT:-8088}"/api/v1/health
echo
echo "部署完成。"
