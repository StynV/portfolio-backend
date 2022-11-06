import { Module } from '@nestjs/common';
import { DataModule } from './data/data.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    DataModule,
  ],
})
export class AppModule {}
