import React from 'react';
import FormFeedback from '../FormFeedback';
import renderer from 'react-test-renderer';

it('FormFeedback should renders correctly', () => {
  const tree = renderer.create(<FormFeedback />).toJSON();
  expect(tree).toMatchSnapshot();
});