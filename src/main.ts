import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middleware/logger/logger.middleware';
import { UserSeed } from './seeds/users/module-seeds.users';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(loggerGlobal);

  const userSeed = app.get(UserSeed);
  await userSeed.seedUser();
  console.log('*** LA INSERCION DE USUARIOS FUE EXITOSA ***');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
