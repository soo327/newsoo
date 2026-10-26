FROM alpine

RUN apk add --update nodejs npm
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3001
ENTRYPOINT ["node", "./server.js"]