import React from 'react';
import Form from '../Form';
import renderer from 'react-test-renderer';

it('FormFeedback should renders correctly', () => {
  const tree = renderer.create(<FormFeedback />).toJSON();
  expect(tree).toMatchSnapshot();
});