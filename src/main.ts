import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as session from 'express-session';
import * as redisStore from 'connect-redis';
import {client} from './redis.client';

const RedisStore = redisStore(session);

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(
        session({
            store: new RedisStore({client}),
            secret: 'ork',
            resave: false,
        }),
    );
    await app.listen(3000);
}

bootstrap();
