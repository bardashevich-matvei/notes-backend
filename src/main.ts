import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function app() {
	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
}

app();