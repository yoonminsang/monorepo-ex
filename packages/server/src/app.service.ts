import { Injectable } from '@nestjs/common';
import { COMMON_CONST } from '@common/const';
import { ICommon } from '@common/types';

@Injectable()
export class AppService {
  getHello(): string {
    const obj: ICommon = {
      name: COMMON_CONST,
    };
    return obj.name;
  }
}
