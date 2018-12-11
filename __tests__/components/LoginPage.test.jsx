import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from '../../components/login-page/LoginPage';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper.find('button').text()).toBe('Log In');

  expect(wrapper).toMatchSnapshot();
});
