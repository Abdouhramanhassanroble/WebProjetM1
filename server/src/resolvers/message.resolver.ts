import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Message } from '../models/message.model';
import { MessageService } from '../services/message.service';
import { SendMessageInput } from '../dto/send-message.input';
import { QueueService } from '../queue/queue.service';

@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly messageService: MessageService,
    private readonly queueService: QueueService
  ) {}

  @Query(() => [Message])
  async messages(@Args('conversationId') conversationId: string) {
    return this.messageService.getMessagesByConversationId(conversationId);
  }

  @Mutation(() => String)
  async sendMessage(@Args('data') data: SendMessageInput) {
    await this.queueService.addMessageJob(data);
    return 'Message queued';
  }
}
