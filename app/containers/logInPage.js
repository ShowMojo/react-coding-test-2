import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from '../styles';
import {logIn} from '../stores/actions';

class LogInPage extends React.PureComponent {
  static navigationOptions = () => ({
    header: null,
  });

  constructor(props) {
    super(props);

    this.state = {
      account: '',
      password: '',
    };
  }

  render() {
    const {logIn, navigation} = this.props;
    const {account, password} = this.state;
    return (
      <View style={styles.containerCenterVertically}>
        <TextInput
          value={account}
          style={styles.textInput}
          placeholder="Account"
          onChangeText={text => this.setState({account: text})}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          value={password}
          secureTextEntry
          style={styles.textInput}
          placeholder="Password"
          onChangeText={text => this.setState({password: text})}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.button}
          disabled={this.props.Store.isLoginFetching}
          onPress={() => {
            logIn({account, password, navigation});
          }}>
          {this.props.Store.isLoginFetching ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonText}>Log In</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

LogInPage.propTypes = {
  navigation: PropTypes.shape().isRequired,
  logIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({Store: state.reducers});
const mapDispatchToProps = dispatch => ({
  logIn: (...args) => {
    dispatch(logIn(...args));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
