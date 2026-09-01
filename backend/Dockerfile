FROM node:24-alpine

WORKDIR /app

# Копируется до исходников, чтобы правка сервера не переустанавливала
# зависимости на каждой сборке.
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Сборки нет: нода стрипает типы прямо при загрузке .ts. Весь src целиком, а не
# нужные файлы по списку — он весит ~400 КБ, а сервер тянет из него модули,
# у которых свои импорты (см. utils.ts); собирать этот список руками значит
# ловить ERR_MODULE_NOT_FOUND уже на дроплете.
COPY instant.schema.ts ./
COPY src ./src
COPY dictionaries ./dictionaries
COPY backend ./backend

USER node
CMD ["node", "backend/server.ts"]
