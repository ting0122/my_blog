import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import databaseConfig from './database.config';

@Injectable()
export class ConfigService {
    constructor(private nestConfigService: NestConfigService) {}

    get database(): typeof databaseConfig {
        return this.nestConfigService.get('database');
    }
}
