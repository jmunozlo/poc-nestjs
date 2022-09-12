FROM node:18-alpine3.15 

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 4000 

CMD ["yarn", "start"]