import React, { createContext, useContext, useReducer } from 'react';
import { State } from '../types/state';

export const initialState: State = {
  user: undefined,
  forms: {
    username: '',
    firstname: '',
    lastname: '',
    password: '',
    consent: false,
  },
};

export const StateContext = createContext({});

export const StateProvider = (props: any) => {
  const { reducer, children, state = initialState} = props;
  return (
    <StateContext.Provider value={useReducer(reducer, state)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
