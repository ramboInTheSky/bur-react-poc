import React from 'react';
import { shallow } from 'enzyme';

import { Header, Logout } from '../header';

import * as auth from '../../utils/auth';
jest.mock('../../utils/auth', () => ({
    logout: jest.fn(() => Promise.resolve()),
}));

describe(Header, () => {
  const props = {
    title: 'hello',
    onLogout: jest.fn(),
  };

  it('should render correctly', () => {
    expect(shallow(<Header {...props} />)).toMatchSnapshot();
  });

  it('should render correctly with a user', () => {
    expect(shallow(<Header {...props} user={{ email: 'test@test.com' }} />)).toMatchSnapshot();
  });

  it('should perform logout correctly', (done) => {
    const comp = shallow(<Header {...props} user={{ email: 'test@test.com' }} />);
    const logoutComp = comp.find(Logout);
    logoutComp.simulate('click');
    expect(auth.logout).toHaveBeenCalled();
    setTimeout(() => {
        expect(props.onLogout).toHaveBeenCalled();
        done();
    });
  });
});
