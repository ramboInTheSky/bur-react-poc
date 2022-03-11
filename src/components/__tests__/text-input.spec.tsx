import React from 'react';
import { shallow } from 'enzyme';

import { TextInput } from '../text-input';

describe(TextInput, () => {
  it('should render correctly', () => {
    expect(shallow(<TextInput />)).toMatchSnapshot();
  });

  it('should render correctly with a value', () => {
    expect(shallow(<TextInput value="test" />)).toMatchSnapshot();
  });

  it('should render correctly when disabled', () => {
    expect(shallow(<TextInput disabled />)).toMatchSnapshot();
  });
});
