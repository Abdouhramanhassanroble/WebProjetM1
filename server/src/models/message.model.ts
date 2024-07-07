import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { Conversation } from './conversation.model';

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string;

  @Field()
  content: string;

  @Field(() => User)
  sender: User;

  @Field(() => Conversation)
  conversation: Conversation;

  @Field()
  timestamp: Date;
}
