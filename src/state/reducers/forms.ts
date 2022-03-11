import { Forms } from '../../types/forms';

export default (state: Forms, action: any) => {
  switch (action.type) {
    case 'updateUsername':
      return {
        ...state,
        username: action.payload,
      };

    case 'updateFirstname':
      return {
        ...state,
        firstname: action.payload,
      };

    case 'updateLastname':
      return {
        ...state,
        lastname: action.payload,
      };

    case 'updatePassword':
      return {
        ...state,
        password: action.payload,
      };

    case 'updateConsent':
      return {
        ...state,
        consent: action.payload,
      };

    default:
      return state;
  }
};
