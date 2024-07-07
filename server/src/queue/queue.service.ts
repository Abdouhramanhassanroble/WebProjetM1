import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { SendMessageInput } from '../dto/send-message.input';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('message-queue') private messageQueue: Queue) {}

  async addMessageJob(data: SendMessageInput) {
    await this.messageQueue.add('send-message', data);
  }
}
