import React from 'react';
import FormHeader from '../FormHeader';
import renderer from 'react-test-renderer';

it('FormHeader should renders correctly', () => {
  const tree = renderer.create(<FormHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});