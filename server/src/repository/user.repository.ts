import { Injectable } from '@nestjs/common';
import { Message } from '../models/message.model';
import { User } from '../models/user.model';
import { Conversation } from '../models/conversation.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MessageRepository {
    private messageMap: Map<string, Message> = new Map();

    async addMessage(content: string, sender: User, conversation: Conversation): Promise<Message> {
        const newMessage = new Message();
        newMessage.id = uuidv4();
        newMessage.content = content;
        newMessage.sender = sender;
        newMessage.conversation = conversation;
        this.messageMap.set(newMessage.id, newMessage);
        return newMessage;
    }

    async getMessageById(id: string): Promise<Message | undefined> {
        return this.messageMap.get(id);
    }
}
