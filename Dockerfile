FROM node:12

WORKDIR /

COPY . .

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]