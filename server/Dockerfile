FROM node:17.6-alpine as builder

WORKDIR /app

COPY . .

WORKDIR /app/server

RUN npm install
RUN npm run build


FROM node:17.6-alpine as runner

ENV NODE_ENV=production

WORKDIR /app
COPY server/package.json .
COPY server/package-lock.json .
COPY --from=builder /app/server/build ./build

RUN npm install

EXPOSE 8000

CMD [ "npm", "run", "start:prod" ]
