import { Injectable } from '@nestjs/common';
import { Conversation } from '../models/conversation.model'
import { User } from '../models/user.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ConversationRepository {
    private conversationMap: Map<string, Conversation> = new Map();

    async addConversation(participants: User[]): Promise<Conversation> {
        const newConversation = new Conversation();
        newConversation.id = uuidv4();
        newConversation.participants = participants;
        this.conversationMap.set(newConversation.id, newConversation);
        return newConversation;
    }

    async getConversationById(id: string): Promise<Conversation | undefined> {
        return this.conversationMap.get(id);
    }
}
