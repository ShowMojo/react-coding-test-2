import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import createStore from './app/stores';
import styles from './app/styles';
import NavigationRouter from './app/containers/navigationRouter';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationRouter />
        </View>
      </Provider>
    );
  }
}

export default App;
