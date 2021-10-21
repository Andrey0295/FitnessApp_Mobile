
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage from './src/modules/login/LoginPage';


export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage/>
      <StatusBar />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

});




