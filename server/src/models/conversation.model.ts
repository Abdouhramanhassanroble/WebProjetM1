import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class Conversation {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => [User])
  participants: User[];
}
