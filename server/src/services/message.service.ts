import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Message } from '../models/message.model';

@Injectable()
export class MessageService {
  private messages: Message[] = [];

  constructor(@InjectQueue('message-queue') private messageQueue: Queue) {}

  async getMessagesByConversationId(conversationId: string): Promise<Message[]> {
    return this.messages.filter(message => message.conversation.id === conversationId);
  }

  async sendMessage(content: string, senderId: string, conversationId: string): Promise<Message> {
    const message = {
      id: Date.now().toString(),
      content,
      sender: { id: senderId, username: `User${senderId}`, email: `user${senderId}@example.com` }, // Dummy sender
      conversation: { id: conversationId, title: `Conversation${conversationId}`, participants: [] }, // Dummy conversation
      timestamp: new Date(),
    };
    await this.messageQueue.add('send-message', message);
    return message;
  }

  async saveMessage(message: Message): Promise<void> {
    this.messages.push(message);
  }
}
