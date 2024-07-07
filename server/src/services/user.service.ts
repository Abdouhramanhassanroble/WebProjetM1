import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(username: string, email: string): User {
    const user = { id: Date.now().toString(), username, email };
    this.users.push(user);
    return user;
  }
}
