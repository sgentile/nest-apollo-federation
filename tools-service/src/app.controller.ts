import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheck } from '@nestjs/terminus';

@Controller()
export class AppController {
    @ApiTags('health')
    @Get()
    @HealthCheck()
    public getHealthCheck() {
        // https://docs.nestjs.com/recipes/terminus
        return { status: 'ok' };
    }
}
