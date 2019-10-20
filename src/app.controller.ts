import {Controller, Get, Param, Redirect} from '@nestjs/common';
import {AppService} from './app.service';
import {promisify} from "util";
import {client} from './redis.client';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get(':id')
    @Redirect('https://google.com', 302)
    async getHello(@Param('id') id: string) {
        const getAsync = promisify(client.get).bind(client);
        const url = await getAsync(id);
        return {url};
    }
}
