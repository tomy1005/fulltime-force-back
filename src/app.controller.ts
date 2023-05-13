import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('git')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('history')
  getHello(): string {
    return this.appService.getHello();
  }
}
