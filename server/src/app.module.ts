import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserResolver } from './resolvers/user.resolver';
import { ConversationResolver } from './resolvers/conversation.resolver';
import { MessageResolver } from './resolvers/message.resolver';
import { UserService } from './services/user.service';
import { ConversationService } from './services/conversation.service';
import { QueueModule } from './queue/queue.module';
import { MessageService } from './services/message.service';
import { MessageProcessor } from './processors/message.processor';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    QueueModule, 
  ],
  providers: [
    UserResolver,
    ConversationResolver,
    MessageResolver,
    UserService,
    ConversationService,
    MessageService,
    MessageProcessor,
  ],
})
export class AppModule {}
