# Base image
FROM node:20.17.0-alpine3.19

WORKDIR /home/app/
COPY package*.json .

RUN npm install

COPY index.js /home/app/index.js

EXPOSE 3000

CMD ["npm", "start"]