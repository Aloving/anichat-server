import { Message } from './message.interface';
import { User } from '../../user/interfaces/user.interface';

export class Room {
  creator: User;
  hash: string;
  messages: Message[];
  participants: User[];
  secretWord: string;
}
