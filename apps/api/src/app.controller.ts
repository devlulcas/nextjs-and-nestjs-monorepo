import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/validate-password')
  validatePassword(@Query('password') password: string): string {
    return this.appService.validatePassword(password)
      ? 'Password is valid'
      : 'Password is invalid';
  }
}
