FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

COPY .env .env

EXPOSE 5173

CMD ["npm","run","dev"]