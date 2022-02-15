import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}