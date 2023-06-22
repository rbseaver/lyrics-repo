import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VersionController } from './version/version.controller';
import { VersionService } from './version/version.service';

@Module({
  imports: [],
  controllers: [AppController, VersionController],
  providers: [AppService, VersionService],
})
export class AppModule {}
