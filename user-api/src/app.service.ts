import { Injectable } from '@nestjs/common';
import { User } from './models/User';
import { InjectModel } from '@nestjs/sequelize';
import { Md5 } from 'ts-md5';

@Injectable()
export class AppService {
  public constructor(
    @InjectModel(User)
    private user: typeof User,
  ) {}

  public async selectUser(name) {
    return name
      ? this.user.findAll({
          where: {
            name,
          },
        })
      : this.user.findAll();
  }

  public createUser(body: any) {
    body.password = Md5.hashStr(body.password);

    this.user.create(body);
  }

  public updateUser(body: any, id: any) {
    this.user.update(body, {
      where: {
        id,
      },
    });
  }

  public deleteUser(id: any) {
    this.user.destroy({
      where: {
        id,
      },
    });
  }
}
