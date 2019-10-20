import {Injectable} from '@nestjs/common';
import * as bluebird from 'bluebird';
import * as redis from 'redis';
import {client} from './redis.client';
import {promisify} from 'util';

@Injectable()
export class AppService {
    async redirectToFullUrl(id: string) {
        const getAsync = promisify(client.get).bind(client);
        const cachedMembers = await getAsync(id);
        console.log('1 - ' + cachedMembers);
    }
}
