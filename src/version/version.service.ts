import { Injectable } from '@nestjs/common';

@Injectable()
export class VersionService {
  getVersion(): Promise<string> {
    return Promise.resolve('1.0.0');
  }
}
