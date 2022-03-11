import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../button';

describe(Button, () => {
  const props = {
    label: 'hello',
  };

  it('should render correctly', () => {
    expect(shallow(<Button {...props} />)).toMatchSnapshot();
  });

  it('should render correctly when disabled', () => {
    expect(shallow(<Button {...props} disabled />)).toMatchSnapshot();
  });
});
