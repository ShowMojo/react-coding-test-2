import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import globals from '../globals';
import styles from '../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
      <TouchableOpacity
        style={[
          styles.containerCenterHorizontally,
          styles.containerCenterVertically,
          styles.logoutButton,
          styles.row,
        ]}
        onPress={onLogoutPress}>
        <Text>Logout</Text>
        <MaterialIcons style={styles.icon} name="logout" size={20} />
      </TouchableOpacity>
    </View>
  );
}
