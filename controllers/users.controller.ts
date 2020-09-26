import { Controller, Get, Req } from '@nestjs/common';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Controller('users')
export class UsersController {
	@Get()
	findAll(): Observable<Array<number>> {
		return of([1, 2, 3]);
	}
}