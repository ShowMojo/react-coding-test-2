import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LogoutButtonComponent from '../app/components/logoutButtonComponent';

it('renders TimeZoneItem', () => {
  const tree = renderer.create(<LogoutButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
