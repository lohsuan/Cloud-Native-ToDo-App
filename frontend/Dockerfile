FROM docker.io/library/node:21-alpine3.18 as BUILDER

WORKDIR /app

COPY package*.json ./
COPY vite.config.ts ./

RUN npm ci

COPY . .

RUN npm run build

# FROM docker.io/library/node:21-alpine3.18

# WORKDIR /app

# COPY package*.json ./
# COPY vite.config.ts ./

# RUN npm ci

# COPY --from=BUILDER /app/dist ./dist

EXPOSE 5173
CMD npm run preview