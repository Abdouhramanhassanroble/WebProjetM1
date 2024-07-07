import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';
import { Message } from '../models/message.model';
import { MessageService } from '../services/message.service';

@Injectable()
@Processor('message-queue')
export class MessageProcessor {
  constructor(private readonly messageService: MessageService) {}

  @Process('send-message')
  async handleSendMessage(job: Job<Message>) {
    console.log('Processing job:', job.data);
    await this.messageService.saveMessage(job.data);
    console.log('Message saved:', job.data);
  }
}
