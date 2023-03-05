FROM node:14.15-alpine

WORKDIR /CTS-USER-MS

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npx", "nodemon"]