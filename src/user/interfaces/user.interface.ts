import { UserStatus } from '../enums/user-status';

export interface User {
  hash: string;
  login: string;
  status: UserStatus;
  token: string;
}
