import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app/app.service';
import { RoomsModule } from './rooms/rooms.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [RoomsModule, UserModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
