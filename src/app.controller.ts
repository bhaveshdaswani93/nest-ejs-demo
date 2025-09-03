import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/example')
  exampleRenderEjs(@Res() res) {
    return res.render('example', {
            title: 'Example',
            main: 'This is an example body content',
            FooterJs: ""
     });
  }

  @Get('/example-layout-auth')
  exampleLayoutAuthRenderEjs(@Res() res) {
    return res.render('example', {
            title: 'Example',
            main: 'This is an example body content',
            layout: 'layouts/layout-auth'
     });
  }
}
