import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { scheduled } from 'rxjs';

@Injectable()
export class SchedulerService {

    private readonly logger = new Logger(SchedulerService.name)

    @Cron('0/30 * 8-19 * * *')
    checkDailyDisclousureInfo() : void {
        this.logger.debug("Called check scheduler");
    }



}
