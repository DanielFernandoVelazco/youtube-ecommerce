import { Module } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthsController } from './auths.controller';
import { UsersModule } from '../users/users.module';
import { SimpleAuthGuard } from './guards/simple-auth.guard';

@Module({
  imports: [UsersModule],
  controllers: [AuthsController],
  providers: [AuthsService, SimpleAuthGuard],
  exports: [AuthsService, SimpleAuthGuard],
})
export class AuthsModule { }