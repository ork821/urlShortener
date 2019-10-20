import {Body, Controller, Get, Post} from '@nestjs/common';
import {ShortenService} from './shorten.service';
import {CreateUrlDto} from './url.dto';

@Controller('api/shorturl')
export class ShortenController {
    constructor(private readonly shortenService: ShortenService) {
    }

    @Post()
    sayHi(@Body() createUrlDto: CreateUrlDto): any {
        return this.shortenService.getShortenUrl(createUrlDto);
    }
}
