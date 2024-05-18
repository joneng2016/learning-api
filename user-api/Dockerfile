FROM node:18.17.0-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
RUN npm install --save-dev @types/sequelize
RUN npm install --save @nestjs/jwt

EXPOSE 3004

CMD ["npm", "run", "start"]
