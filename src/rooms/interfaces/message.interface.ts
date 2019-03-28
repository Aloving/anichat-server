import { User } from '../../user/interfaces/user.interface';

type MessageDate = string;

export interface Message {
  content: string;
  date: MessageDate;
  id: string;
  user: User;
}
