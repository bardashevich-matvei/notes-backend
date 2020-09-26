import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
	constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
	) {}
	

	async create(user: User): Promise<User> {
		return this.usersRepository.create(user);
	}

	async findOne(selector: User): Promise<User> {
		return this.usersRepository.findOne(selector);
	}
}