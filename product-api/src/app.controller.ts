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
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('products')
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public getProducts(@Query('name') name) {
    return this.appService.selectProduct(name);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public createProduct(@Body() body): object {
    this.appService.createProduct(body);
    return { message: 'Product created', body };
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  public updateProduct(@Body() body, @Query('id') id): object {
    this.appService.updateProduct(body, id);
    return { message: 'Product updated', body };
  }

  @Delete()
  @HttpCode(HttpStatus.OK)
  public deleteProduct(@Query('id') id): object {
    this.appService.deleteProduct(id);
    return { message: 'Product deleted' };
  }
}
