FROM node:14.15-alpine

WORKDIR /CTS-NODE-API

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]