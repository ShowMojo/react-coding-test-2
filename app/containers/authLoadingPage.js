import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from '../styles';
import {checkAuth} from '../stores/actions';

class AuthLoadingPage extends React.PureComponent {
  static navigationOptions = () => ({
    header: null,
  });

  componentDidMount() {
    this.props.checkAuth({navigation: this.props.navigation});
  }

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

const mapDispatchToProps = dispatch => ({
  checkAuth: (...args) => {
    dispatch(checkAuth(...args));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingPage);
