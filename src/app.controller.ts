import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('git')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('commits-front')
  getGitCommitsFront() {
    return this.appService.gitCommitsFront();
  }

  @Get('commits-back')
  getGitCommitsBack() {
    return this.appService.gitCommitsBack();
  }
}
