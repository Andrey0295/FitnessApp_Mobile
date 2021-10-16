import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import LogoText from '../../components/LogoText';
import LoginForm from './LoginForm';





const LoginPage = () => {

  return (
    <ScrollView>
      <View style={styles.loginPageBlock}>
        <LinearGradient
          colors={['#eeaeca', '#94bbe9']}
          start={[0.5, 0.5]}
          end={[0.4, 0.5]}
          style={styles.gradient}
          locations={[0.1, 0.9]}
        />
        <LogoText/>
        <LoginForm/>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  loginPageBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#94bbe9',
    
  },

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',      
  }

});


export default LoginPage;