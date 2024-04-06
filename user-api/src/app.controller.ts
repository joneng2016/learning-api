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
  Header,
} from '@nestjs/common';
import { AppService } from './app.service';
import { json2xml } from 'xml-js';

@Controller('users')
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public getUsers(@Query('name') name) {
    return this.appService.selectUser(name);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public createUser(@Body() body): object {
    this.appService.createUser(body);
    return { message: 'User created', body};
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  public updateUser(@Body() body, @Query('id') id): object {
    this.appService.updateUser(body, id)
    return { message: 'User updated', body}
  }

  @Delete()
  @HttpCode(HttpStatus.OK)
  public deleteUser(@Query('id') id): object {
    this.appService.deleteUser(id)
    return { message: 'User deleted'}
  }

  @Get('xml')
  @HttpCode(HttpStatus.OK)
  public async getUsersXML(@Query('name') name) {
    const resp = {
      resp: await this.appService.selectUser(name),
    };

    return json2xml(JSON.stringify(resp), {
      compact: true,
      ignoreComment: true,
      spaces: 4,
    });
  }
}
