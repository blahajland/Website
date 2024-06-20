FROM node:20-alpine

WORKDIR .

RUN apk add git

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY .output .

EXPOSE 3000

CMD ["node", "./server/index.mjs"]