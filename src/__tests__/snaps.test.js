import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Home from '../components/Home';
import Quote from '../components/Quote';

configure({ adapter: new Adapter() });

const renderHome = () => shallow(<Home />);

it('has a title', () => {
  const wrapper = renderHome();
  expect(wrapper.find('.texts').text()).toBe('Math Magicians');
});

const renderQuote = () => shallow(<Quote />);

it('has a quote', () => {
  const wrapper = renderQuote();
  expect(wrapper.find('.texts').text()).toBe('Math is fun');
});

// test with snapshot
it('renders quotes page', () => {
  const tree = renderer.create(<Quote />);
  expect(tree).toMatchSnapshot();
});

it('renders home page', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});
