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
    height: 40,
    width: 90,
    paddingHorizontal: 10,
    marginRight: 20,
    alignSelf: 'flex-start',
    backgroundColor: '#000000',
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  timeZoneItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  fontColorMain: {
    color: '#000000',
  },
  fontColorSub: {
    color: '#828282',
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    margin: 5,
  },
  flatListFooterContainer: {
    height: 150,
  },
  alignCenter: {
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});
