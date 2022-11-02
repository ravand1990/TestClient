FROM node:lts-alpine
WORKDIR /usr/src/app

RUN npm i -g @angular/cli
COPY package.json .
RUN npm i

COPY .. .

EXPOSE 4200

CMD ng serve --host 0.0.0.0 --poll 2000 --disable-host-check
