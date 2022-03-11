import { User } from '../../types/user';

export default (state: User | undefined, action: any) => {
  switch (action.type) {
    case 'updateUser':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
