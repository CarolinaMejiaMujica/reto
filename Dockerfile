FROM node:9.4.0-alpine
COPY src/App.js .
COPY package.json .
RUN npm install &&\
    apk update &&\
    apk upgrade
EXPOSE  8080
CMD node src/App.js