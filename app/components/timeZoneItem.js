import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);
const getTimeByZones = zones => {
  const zone = zones[0];
  const currentTime = dayjs(Date.now()).tz(zone).format('hh:mm A');
  return currentTime;
};

export default class TimeZoneItem extends React.PureComponent {
  render() {
    const _time = getTimeByZones(this.props.timeZone.zones);
    const [time, period] = _time.split(' ');
    return (
      <View style={[styles.timeZoneItemContainer]}>
        <View style={componentStyles.timeZoneDetails}>
          <Text style={[styles.fontColorMain, componentStyles.itemValue]}>
            {this.props.timeZone.value}
          </Text>
          <Text style={[styles.fontColorSub, componentStyles.itemText]}>
            {this.props.timeZone.text}
          </Text>
        </View>

        <View style={componentStyles.timeDisplay}>
          <Text style={[componentStyles.hourAndMinutes]}>{time}</Text>
          <Text style={[componentStyles.period]}>{period}</Text>
        </View>
      </View>
    );
  }
}

TimeZoneItem.propTypes = {
  timeZone: PropTypes.shape().isRequired,
};

const componentStyles = StyleSheet.create({
  itemValue: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: '600',
  },
  itemText: {
    fontSize: 12,
  },
  timeZoneDetails: {
    width: '70%',
  },
  timeDisplay: {
    flexDirection: 'row',
    height: 32,
  },
  hourAndMinutes: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  period: {
    fontSize: 12,
    marginTop: 'auto',
    fontWeight: '500',
  },
});
