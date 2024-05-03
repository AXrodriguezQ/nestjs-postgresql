import { Module } from '@nestjs/common';
import { BooksModule } from './modules/books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BooksModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: '123',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true
  })],
})
export class AppModule {}
