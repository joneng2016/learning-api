import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppJwtController } from './app.jwtcontroller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './models/Product';
import { User } from './models/User';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'MySecretKey',
      signOptions: { expiresIn: '1000s' },
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'positivo',
      database: 'generaldbs',
      models: [Product, User],
    }),
    SequelizeModule.forFeature([Product, User]),
  ],
  controllers: [AppController, AppJwtController],
  providers: [AppService],
})
export class AppModule {}
