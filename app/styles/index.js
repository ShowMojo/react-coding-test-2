import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCenterVertically: {
    flex: 1,
    justifyContent: 'center',
  },
  containerCenterHorizontally: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    marginVertical: 10,
    borderWidth: 1,
  },
  button: {
    height: 40,
    marginHorizontal: 40,
    marginVertical: 10,
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});
