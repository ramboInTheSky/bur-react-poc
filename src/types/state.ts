import { User } from './user';
import { Forms } from './forms';

export interface State {
    user: User | undefined;
    forms: Forms;
}