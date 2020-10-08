FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY ./key.pem ./key.pem
COPY ./cert.pem ./cert.pem

RUN npm install
COPY . .
EXPOSE 3000

CMD [ "node", "server.js" ]
