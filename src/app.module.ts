import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortenController } from './shorten/shorten.controller';
import { ShortenService } from './shorten/shorten.service';
import { ShortenModule } from './shorten/shorten.module';

@Module({
  imports: [ShortenModule],
  controllers: [AppController, ShortenController],
  providers: [AppService, ShortenService],
})
export class AppModule {}
