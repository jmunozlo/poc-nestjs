import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain(): any {
    return {
      name: 'poc-api',
      version: '0.0.1',
      description: 'REST API with NESTJS',
      author: 'jmunozlo',
      message: process.env.MESSAGE || 'Sin variable',
    };
  }
}
