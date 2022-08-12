import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {asyncStorage_authUser} from '../../constants';

const BASE_URL = 'http://127.0.0.1:4000';

const asyncLogIn = async payload => {
  const {account, password} = payload;

  return Axios.get(`${BASE_URL}/login`, {
    params: {
      account,
      password,
    },
  });
};

const setLoggedInUser = async p_data => {
  const data = JSON.stringify(p_data);
  await AsyncStorage.setItem(asyncStorage_authUser, data);
};

const getLoggedInUser = async () => {
  const data = await AsyncStorage.getItem(asyncStorage_authUser);
  if (data) {
    const _data = JSON.parse(data);
    return _data.isLoggedIn ? _data : null;
  }

  return null;
};

export default {
  asyncLogIn,
  setLoggedInUser,
  getLoggedInUser,
};
