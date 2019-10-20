import {Injectable} from '@nestjs/common';
import {CreateUrlDto} from './url.dto';
import {v4 as uuid} from 'uuid';
import {client} from '../redis.client';

@Injectable()
export class ShortenService {
    getShortenUrl(createUrlDto: CreateUrlDto): string {
        const {url} = createUrlDto;
        const uniqueUrl = uuid().split('-')[0];
        client.set(uniqueUrl, url);
        const output = `localhost:3000/${uniqueUrl}`;
        return output;
    }
}
