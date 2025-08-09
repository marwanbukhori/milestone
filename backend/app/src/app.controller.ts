import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('profile')
  getProfile() {
    return {
      name: 'Marwan Bukhori',
      role: 'Software Engineer',
      summary: 'Backend-focused, AWS-driven developer.',
    };
  }
}
