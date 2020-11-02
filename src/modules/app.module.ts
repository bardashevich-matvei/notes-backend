import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users.module';
import { Users } from '../entities/user.entity';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'root',
			database: 'notes',
			entities: [Users],
			synchronize: true,
			autoLoadEntities: true,
		}),
		UsersModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }