FROM node:13-alpine

ENV MONG_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=admin \
    MONGO_DB_NAME=beat-assessment

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node", "/home/app/index.js"]