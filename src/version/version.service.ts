import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class VersionService {
  getVersion(): string {
    const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));
    return packageJson.version;
  }
}
