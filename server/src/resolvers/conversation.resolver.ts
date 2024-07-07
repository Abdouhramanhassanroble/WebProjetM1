import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Conversation } from '../models/conversation.model';
import { ConversationService } from '../services/conversation.service';
import { CreateConversationInput } from '../dto/create-conversation.input';

@Resolver(() => Conversation)
export class ConversationResolver {
  constructor(private readonly conversationService: ConversationService) {}

  @Query(() => [Conversation])
  async conversations() {
    return this.conversationService.getAllConversations();
  }

  @Query(() => [Conversation])
  async userConversations(@Args('userId') userId: string) {
    return this.conversationService.getConversationsByUserId(userId);
  }

  @Mutation(() => Conversation)
  async createConversation(@Args('data') data: CreateConversationInput) {
    return this.conversationService.createConversation(data.title, data.participantIds);
  }
}
