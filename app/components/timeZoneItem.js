import {Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class TimeZoneItem extends React.PureComponent {
  render() {
    return (
      <View style={[styles.timeZoneItemContainer]}>
        <Text style={[styles.blackText]}>{this.props.timeZone.text}</Text>
        <Text style={[styles.blackText]}>{this.props.timeZone.value}</Text>
      </View>
    );
  }
}

TimeZoneItem.propTypes = {
  timeZone: PropTypes.shape().isRequired,
};
