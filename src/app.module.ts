import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Custom Modules
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

// TypeORM
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';
import { TagsModule } from './tags/tags.module';


@Module({
  imports: [    
    UsersModule, 
    PostsModule, 
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: ()=> ({
        type: 'postgres', // Type of Database connecting to
        autoLoadEntities: true,
        // entities: [
        //   User,
        //   Post
        // ], // Entities based on which ORM will create tables in the database
        /**
         * synchronize must be used only in development mode
         * Creates DB schemas in your application
         * This could be destructive in production mode
         */
        synchronize: true,
        /**
         * Postgress sql related configurations
         * port: Port number <default is 5432>
         * username: Username of the postgres server
         * password: Password of the associated username
         * host: host <localhost for development>
         * database: Database identification name
         */
        port: 5432,
        username: 'postgres',
        password: 'password',
        host: 'localhost',
        database: 'nestjs-blog'
      })      
    }),
    TagsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
