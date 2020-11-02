import { Controller, Get, Post, Req } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { Users } from '../entities/user.entity';
import { UserInterface } from '../interface/user.interface';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) { }

	@Get()
	findAll(): Array<number> {
		return [1, 2, 3];
	}

	@Post()
	async create(): Promise<Users> {
		const newUser = await this.usersService.create({
			login: '123',
			password: 'qwe'
		});
		return newUser;
	}
}