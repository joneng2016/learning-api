import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message: 'HellofadfWorld!',
      version: 'nest node 18.3'
    };
  }
}
