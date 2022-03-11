import { User } from './user';

export interface Auth {
  username: string;
  password: string;
  profile?: User;
}
