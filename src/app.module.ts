import { Module } from '@nestjs/common';
import { AppController } from './modules/controllers/app.controller';
import { AppService } from './modules/services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
