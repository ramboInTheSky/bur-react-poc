import React from 'react';
import { shallow, mount } from 'enzyme';

import { StateProvider } from '../../state';
import reducer from '../../state/reducers';

import App from '../app';

import * as auth from '../../utils/auth';
jest.mock('../../utils/auth', () => ({
  getAccount: jest.fn(() => Promise.resolve({ email: 'test@test.com' })),
}));

// TODO
// Get rid of act() error in terminal
// Test setting global state

describe(App, () => {
  let comp;

  beforeEach(() => {
    comp = (
      <StateProvider reducer={reducer}>
        <App />
      </StateProvider>
    );
  });
  it('should render correctly', () => {
    expect(shallow(comp)).toMatchSnapshot();
  });

  it('should attempt to get account details on mount', () => {
    mount(comp);
    expect(auth.getAccount).toHaveBeenCalled();
  });
});
