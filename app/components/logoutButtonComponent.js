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
    <TouchableOpacity
      style={[styles.logoutButton, styles.row]}
      onPress={onLogoutPress}>
      <View style={[styles.row, styles.alignCenter]}>
        <Text style={[styles.buttonText]}>Logout</Text>
        <MaterialIcons
          style={[styles.buttonText, styles.icon]}
          name="logout"
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
}
