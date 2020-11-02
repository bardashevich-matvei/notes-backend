import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';
import { UserInterface } from '../interface/user.interface'

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(Users)
		private usersRepository: Repository<Users>,
	) { }


	async create(user: UserInterface): Promise<Users> {
		console.log(user);
		const newUser = await this.usersRepository.save(user);
		console.log(newUser);
		return newUser;
	}

	async findOne(selector: UserInterface): Promise<Users> {
		return this.usersRepository.findOne(selector);
	}
}