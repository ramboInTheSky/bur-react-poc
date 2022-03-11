import React from 'react';
import { shallow } from 'enzyme';

import Login, { Form } from '../login';

const mockDispatch = jest.fn();
const mockLogin = jest.fn();

jest.mock('../../state/actions', () => () => ({
    login: mockLogin,
    logout: () => {},
    foo: 'bar',
}));

jest.mock('../../state', () => ({
  useStateValue: () => [
    {
      user: undefined,
      forms: { username: 'foo', password: 'bar' },
    },
    mockDispatch,
  ],
}));

describe(Login, () => {
  const props = {
    history: {
      location: {
        search: '?redirect=baz',
      },
    },
  };

  it('should render correctly', () => {
    expect(shallow(<Login {...props} />)).toMatchSnapshot();
  });

  it('should fire correct dispatch on input change', () => {
    const component = shallow(<Login {...props} />);
    const password = component.find('[type="password"]');
    password.simulate('change', { target: { value: 'baz' } });
    expect(mockDispatch).toHaveBeenCalledWith({ payload: 'baz', type: 'updatePassword' });
  });

  it('should attempt login on form submit', () => {
    const component = shallow(<Login {...props} />);
    const form = component.find(Form);
    form.simulate('submit', { preventDefault: () => {} });
    expect(mockLogin).toHaveBeenCalledWith('foo', 'bar', 'baz');
  });
});
