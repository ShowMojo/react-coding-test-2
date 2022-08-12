import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AuthLoadingPage from './AuthLoadingPage';
import logInPage from './logInPage';
import timezoneListPage from './timezoneListPage';

const MainStack = createStackNavigator({
  TimezoneListPage: {
    screen: timezoneListPage,
  },
});

const AuthStack = createStackNavigator({
  LogInPage: {
    screen: logInPage,
  },
});

export const mainContainer = createSwitchNavigator({
  AuthLoading: AuthLoadingPage,
  App: MainStack,
  Auth: AuthStack,
});

export default createAppContainer(mainContainer);
