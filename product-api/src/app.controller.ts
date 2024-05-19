import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Query,
  HttpCode,
  HttpStatus,
  Delete,
  Headers,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { User } from './models/User';
import { InjectModel } from '@nestjs/sequelize';
import authJwt from './helper/authJwt';

@Controller('products')
export class AppController {
  public constructor(
    @InjectModel(User) 
    private readonly user: typeof User,
    private readonly appService: AppService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async getProducts(
    @Query('name') name,
    @Headers('authorization') authorization,
  ) {
    authJwt({
      jwtService: this.jwtService,
      userService: this.user,
      authorization,
    });

    return this.appService.selectProduct(name);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public createProduct(
    @Body() body,
    @Headers('authorization') authorization,
  ): object {
    authJwt({
      jwtService: this.jwtService,
      userService: this.user,
      authorization,
    });

    this.appService.createProduct(body);
    return { message: 'Product created', body };
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  public updateProduct(
    @Body() body,
    @Query('id') id,
    @Headers('authorization') authorization,
  ): object {
    authJwt({
      jwtService: this.jwtService,
      userService: this.user,
      authorization,
    });

    this.appService.updateProduct(body, id);
    return { message: 'Product updated', body };
  }

  @Delete()
  @HttpCode(HttpStatus.OK)
  public deleteProduct(
    @Query('id') id,
    @Headers('authorization') authorization,
  ): object {
    authJwt({
      jwtService: this.jwtService,
      userService: this.user,
      authorization,
    });

    this.appService.deleteProduct(id);
    return { message: 'Product deleted' };
  }
}
