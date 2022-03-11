import logging from '../../utils/stateLogging';
import { State } from '../../types/state';

import userReducer from './user';
import formsReducer from './forms';

export default (state: State, action: any) => {
  logging(state, action);
  return {
    user: userReducer(state.user, action),
    forms: formsReducer(state.forms, action),
  };
};
