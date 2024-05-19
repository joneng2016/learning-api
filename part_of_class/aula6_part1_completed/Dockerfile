FROM node:18.13.0-alpine

WORKDIR /app

COPY . .

RUN npm install -g @nestjs/cli && npm install && npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2 && npm install --save-dev @types/sequelize && npm install --save @nestjs/jwt


EXPOSE 3000

VOLUME /app

CMD ["npm", "run", "start:dev"]