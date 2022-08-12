import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TimeZoneItem from '../app/components/timeZoneItem';

it('renders TimeZoneItem', () => {
  const tree = renderer
    .create(
      <TimeZoneItem
        timeZone={{
          id: 28,
          value: 'UTC-02',
          abbr: 'U',
          offset: -2,
          isdst: false,
          text: '(UTC-02:00) Coordinated Universal Time-02',
          zones: ['America/Noronha', 'Atlantic/South_Georgia', 'Etc/GMT+2'],
        }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
