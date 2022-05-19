import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import logInPage from './logInPage';
import timezoneListPage from './timezoneListPage';

export const mainContainer = createStackNavigator({
  LogInPage: {
    screen: logInPage,
  },
  TimezoneListPage: {
    screen: timezoneListPage,
  },
});

export default createAppContainer(mainContainer);
