import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path/win32';
import { NestExpressApplication } from '@nestjs/platform-express';
const expressLayouts = require('express-ejs-layouts');

async function bootstrap() {
   const app = await NestFactory.create<NestExpressApplication>(AppModule);

   // Set up view engine
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  app.set('layout', 'layouts/layout');
  app.use(expressLayouts);

  await app.listen(process.env.PORT ?? 9000);
}
bootstrap();
