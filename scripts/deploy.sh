#!/usr/bin/env bash
set -euo pipefail

if [[ "${EUID}" -eq 0 ]]; then
  echo "错误：请勿使用 sudo 运行部署脚本。"
  echo "应用使用当前登录用户的 rootless Podman；请修复项目目录权限后直接运行：bash scripts/deploy.sh"
  exit 1
fi

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FRONTEND_INDEX="${PROJECT_DIR}/frontend/dist/index.html"
BACKEND_BINARY="${PROJECT_DIR}/backend/server"
DEPLOY_GOARCH="${DEPLOY_GOARCH:-amd64}"
HTTP_PORT="${HTTP_PORT:-8088}"
IMAGE_NAME="${IMAGE_NAME:-localhost/sakura-tools:latest}"
CONTAINER_NAME="${CONTAINER_NAME:-sakura-tools-app}"
VOLUME_NAME="${VOLUME_NAME:-sakura-tools-data}"
ENV_FILE="${ENV_FILE:-${PROJECT_DIR}/.env}"
CA_CERT_PATH="${CA_CERT_PATH:-/etc/pki/tls/certs/ca-bundle.crt}"

RUN_ENV_ARGS=()
if [[ -f "${ENV_FILE}" ]]; then
  RUN_ENV_ARGS+=(--env-file "${ENV_FILE}")
fi

RUN_CA_ARGS=()
if [[ -f "${CA_CERT_PATH}" ]]; then
  RUN_CA_ARGS+=(-v "${CA_CERT_PATH}:/etc/ssl/certs/ca-certificates.crt:ro")
else
  echo "警告：未找到 CA 证书 ${CA_CERT_PATH}，在线翻译的 HTTPS 请求可能失败。"
fi

if [[ ! -f "${FRONTEND_INDEX}" ]]; then
  echo "错误：未找到 frontend/dist/index.html。"
  echo "请先在本地运行 npm run build，将 frontend/dist 提交并推送到 Git。"
  exit 1
fi

echo "[1/3] 使用服务器现有 Go 编译 Linux 后端…"
cd "${PROJECT_DIR}/backend"
GOPROXY="${GOPROXY:-https://goproxy.cn,direct}" \
CGO_ENABLED=0 GOOS=linux GOARCH="${DEPLOY_GOARCH}" \
  go build -p=1 -tags=nomsgpack -trimpath -ldflags="-s -w" -o "${BACKEND_BINARY}" ./cmd/server

echo "[2/3] 构建不含基础镜像的 scratch 容器…"
cd "${PROJECT_DIR}"
podman build --pull=never -t "${IMAGE_NAME}" -f Containerfile .

podman volume inspect "${VOLUME_NAME}" >/dev/null 2>&1 || \
  podman volume create "${VOLUME_NAME}" >/dev/null

# 构建成功后再替换容器，尽量缩短发布中断时间。
podman rm -f "${CONTAINER_NAME}" >/dev/null 2>&1 || true
podman run --pull=never -d \
  --name "${CONTAINER_NAME}" \
  --restart=unless-stopped \
  -p "127.0.0.1:${HTTP_PORT}:8080" \
  -e GIN_MODE=release \
  -e APP_ADDRESS=:8080 \
  -e DATABASE_PATH=/app/data/sakura-tools.db \
  -e FRONTEND_DIR=/app/public \
  -e TZ=Asia/Shanghai \
  "${RUN_ENV_ARGS[@]}" \
  -v "${VOLUME_NAME}:/app/data" \
  "${RUN_CA_ARGS[@]}" \
  --read-only \
  --security-opt no-new-privileges \
  "${IMAGE_NAME}"

echo "[3/3] 检查服务…"
podman ps --filter "name=${CONTAINER_NAME}"

for attempt in {1..10}; do
  if curl --fail --silent --show-error \
    "http://127.0.0.1:${HTTP_PORT}/api/v1/health"; then
    echo
    echo "部署完成。"
    exit 0
  fi
  sleep 1
done

echo
echo "错误：服务未通过健康检查。最近日志如下："
podman logs --tail=100 "${CONTAINER_NAME}" || true
exit 1
