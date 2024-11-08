# Testing Lab

## HW1-1: Add Dockerfile and docker-compose

How to test:

```shell
# in hw(root) directory
$ docker-compose up -d
```

![docker-compose-demo](docker-compose-demo.png)

## HW1-2: Add Deployment, Service, Ingress config

![external-ip-todo-demo.png](external-ip-todo-demo.png)

## Backend

Fastify Server

### Set your environment variable

```
cd backend
cp .env.sample .env
```

### Development

Run a mongo container
```
docker run -d -p 27017:27017 mongo
```

Install dependencies
```
npm install
```

Start development mode
```
npm run dev
```

### Run the test

```
npm run test
```

## Frontend

React (by vite)

### Development

Install dependencies
```
npm install
```

Start development mode
```
cd frontend
npm run dev
```

Visit
http://localhost:5173

### Run cypress test

```
npm run cy:test
```