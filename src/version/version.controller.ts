import { Controller, Get } from '@nestjs/common';

@Controller('version')
export class VersionController {
  @Get()
  getVersion(): string | Promise<string> {
    return '1.0.0';
  }
}
