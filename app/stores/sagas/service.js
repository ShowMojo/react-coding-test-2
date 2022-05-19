import Axios from 'axios';

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

export default {
  asyncLogIn,
};
