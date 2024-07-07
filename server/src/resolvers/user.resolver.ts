import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.getAllUsers();
    }

  @Mutation(() => User)
  async createUser(@Args('username') username: string, @Args('email') email: string) {
    return this.userService.createUser(username, email);
  }

  @Query(() => String)
  async test(): Promise<string> {
    return 'ok';
  }
}
