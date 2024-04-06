import { Injectable } from '@nestjs/common';
import { User } from './models/User';
import { InjectModel } from '@nestjs/sequelize';

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
    console.log(body);
    this.user.create(body);
  }

  public updateUser(body: any, id: any) {
    console.log(id)
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
