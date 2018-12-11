import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/header/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find('a').text()).toBe('Oberbeer');

  expect(wrapper).toMatchSnapshot();
});
