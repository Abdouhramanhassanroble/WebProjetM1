import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateConversationInput {
  @Field()
  title: string;

  @Field(() => [String])
  participantIds: string[];
}
