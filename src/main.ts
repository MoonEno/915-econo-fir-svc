import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
     whitelist : true, // DTO에서 정의한 VARIABLE외에 PARAM값은 처리하지 않음
     forbidNonWhitelisted : true, // DTO에서 정의한 VARIABLE외에 PARAM값이 들어올 경우 에러 리턴
     transform : true // 잘못된 데이터 형식이 들어 오더라도 DTO에 정해놓은 타입형으로 변경해줌

  }))
  await app.listen(3000);
}
bootstrap();
