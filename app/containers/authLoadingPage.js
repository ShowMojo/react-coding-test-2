import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from '../styles';

class AuthLoadingPage extends React.PureComponent {
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
        <Text>Loading..</Text>
      </View>
    );
  }
}

AuthLoadingPage.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({Store: state.reducers});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingPage);