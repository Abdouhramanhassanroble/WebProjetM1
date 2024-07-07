import { Controller, Get } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('health')
export class HealthController {
  constructor(@InjectQueue('testQueue') private readonly testQueue: Queue) {}

  @Get()
  async healthCheck(): Promise<string> {
    // Ajouter un job à la queue
    await this.testQueue.add('testJob', {
      message: 'This is a test job!',
    });
    return 'OK';
  }
}
