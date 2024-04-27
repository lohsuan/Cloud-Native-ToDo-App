FROM docker.io/library/node:21-alpine3.18 as BUILDER

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM docker.io/library/node:21-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=BUILDER /app/dist ./dist

EXPOSE 8888
CMD [ "node", "dist/index.js" ]