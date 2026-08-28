FROM scratch

WORKDIR /app

COPY backend/server /app/server
COPY frontend/dist /app/public

EXPOSE 8080

ENTRYPOINT ["/app/server"]
