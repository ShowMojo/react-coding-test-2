import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from '../styles';
import LogoutButtonComponent from '../components/logoutButtonComponent';
import globals from '../globals';
import {logout} from '../stores/actions';

class TimezoneListPage extends React.PureComponent {
  static navigationOptions = () => ({
    headerRight: LogoutButtonComponent,
  });

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    globals.onLogout = () => {
      this.props.logout({navigation: this.props.navigation});
    };
  }

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
const mapDispatchToProps = dispatch => ({
  logout: (...args) => {
    dispatch(logout(...args));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TimezoneListPage);
