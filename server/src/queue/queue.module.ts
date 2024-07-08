import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { QueueService } from './queue.service';
import { MessageProcessor } from '../processors/message.processor';
import { MessageService } from '../services/message.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'message-queue',
    }),
  ],
  providers: [QueueService, MessageProcessor, MessageService],
  exports: [QueueService, MessageService],
})
export class QueueModule {}
