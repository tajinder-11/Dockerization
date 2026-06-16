# Base image
FROM node:20.17.0-alpine3.19

RUN apk add --no-cache curl

WORKDIR /home/app/
COPY package*.json .

RUN npm install

COPY index.js /home/app/index.js

ENV PORT=8000
EXPOSE 8000

CMD ["npm", "start"]