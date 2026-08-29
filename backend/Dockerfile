FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY instant.schema.ts ./
COPY src/types.ts src/config.ts ./src/
COPY dictionaries ./dictionaries
COPY backend ./backend

CMD ["node", "backend/server.ts"]
