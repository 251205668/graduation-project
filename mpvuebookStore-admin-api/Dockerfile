FROM node:latest

WORKDIR /app
COPY . /app

RUN rm -rf node_modules \
    ; npm config set registry "https://registry.npm.taobao.org/" \
    && npm install

EXPOSE 5000
CMD ["node", "app.js"]
