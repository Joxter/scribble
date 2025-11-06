FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy backend source
COPY backend ./backend

EXPOSE 3000

CMD ["node", "--experimental-strip-types", "backend/server.ts"]
