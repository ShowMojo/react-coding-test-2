import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from '../styles';

class TimezoneListPage extends React.PureComponent {
  static navigationOptions = () => ({
    header: null,
  });

  render() {
    return (
      <View
        style={[
          styles.containerCenterHorizontally,
          styles.containerCenterVertically,
        ]}>
        <Text>Timezone List Page</Text>
      </View>
    );
  }
}

TimezoneListPage.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({Store: state.reducers});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TimezoneListPage);
