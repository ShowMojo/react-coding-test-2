import React from 'react';
import {Alert, Pressable, Text, View} from 'react-native';
import globals from '../globals';
import styles from '../styles';

export default function LogoutButtonComponent() {
  const onLogoutPress = () => {
    Alert.alert('Alert', 'Do you want to Logout ?', [
      {
        text: 'cancel',
      },
      {
        text: 'Logout',
        onPress: globals.onLogout,
        style: 'destructive',
      },
    ]);
  };
  return (
    <View>
      <Pressable
        style={[
          styles.containerCenterHorizontally,
          styles.containerCenterVertically,
          styles.logoutButton,
        ]}
        onPress={onLogoutPress}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
