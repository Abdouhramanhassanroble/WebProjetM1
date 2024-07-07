import { Injectable } from '@nestjs/common';
import { Conversation } from '../models/conversation.model';
import { User } from '../models/user.model';

@Injectable()
export class ConversationService {
  private conversations: Conversation[] = [];

  getAllConversations(): Conversation[] {
    return this.conversations;
  }

  getConversationsByUserId(userId: string): Conversation[] {
    return this.conversations.filter(conversation =>
      conversation.participants.some(participant => participant.id === userId)
    );
  }

  createConversation(title: string, participantIds: string[]): Conversation {
    const conversation = {
      id: Date.now().toString(),
      title,
      participants: participantIds.map(id => ({ id, username: `User${id}`, email: `user${id}@example.com` })), // Dummy users
    };
    this.conversations.push(conversation);
    return conversation;
  }
}
