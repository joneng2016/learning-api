import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './models/User';
import { InjectModel } from '@nestjs/sequelize';

@Controller('auth')
export class AppJwtController {
  public constructor(
    private readonly jwtService: JwtService,
    @InjectModel(User)
    private readonly user: typeof User,
  ) {}

  @Get('login')
  public async login(
    @Query('email') email,
    @Query('password') password,
  ): Promise<object> {
    const user = await this.user.findOne({
      where: {
        email,
        password: password,
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return {
      token: await this.jwtService.signAsync({
        name: user.dataValues.name,
        email: user.dataValues.email,
        password: user.dataValues.password,
      }),
    };
  }
}
