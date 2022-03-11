import React from 'react';

import { StateProvider } from '../state';
import reducer from '../state/reducers';

import App from './app';

const AppContainer = () => {
  return (
    <StateProvider reducer={reducer}>
      <App />
    </StateProvider>
  );
}

export default AppContainer;