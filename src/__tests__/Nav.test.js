import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Nav from '../components/Nav';

configure({ adapter: new Adapter() });
it('contains 3 NavLinks via shallow', () => {
  const numLinks = shallow(<Nav />).find('NavLink').length;
  expect(numLinks).toEqual(3);
});
