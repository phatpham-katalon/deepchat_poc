import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {config} from 'dotenv';
import {CorsOptions} from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  // Load environment variables first
  config();
  
  const app = await NestFactory.create(AppModule);
  
  // Configure CORS
  const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: false,
  };
  app.enableCors(corsOptions);
  const PORT = 8000;
  await app.listen(PORT);
  console.log(`Application is running on: port ${PORT}`);
}
bootstrap();
