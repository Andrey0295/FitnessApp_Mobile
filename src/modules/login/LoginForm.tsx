
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { emailIcon, passwordIcon } from '../../../assets/images/index.js';
import CustomInputWithIcon from '../../components/custom-components/CustomInputWithIcon';
import CustomText from '../../components/custom-components/CustomText';
import ProviderAuthBlock from './ProviderAuthBlock';


const LoginForm = () => {
  return (
    
    <View style={styles.loginForm}>
      <CustomText style={styles.loginWelcomeText}>HI THERE 👋🏻 </CustomText>
      <CustomText style={styles.title}>Let’s Get you Started</CustomText>
      <CustomInputWithIcon
        placeholder={'Email'}
        source={emailIcon}
      />
      <CustomInputWithIcon
        placeholder={'Password'}
        secureTextEntry={true}
        source={passwordIcon} />
      <TouchableOpacity style={styles.button}>
        <CustomText style={styles.buttonText}>Sign up</CustomText>
      </TouchableOpacity>
      <ProviderAuthBlock/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  loginForm: {
    alignItems: 'center',
    marginBottom: '25%',
    width: '95%',
    height: 550,
    paddingTop: 25,
    borderRadius: 40,
    backgroundColor: 'rgba(49, 49, 49, 0.6)',
    
  },
  title: {
    paddingBottom: 30,
    fontFamily: 'Poppins_400Regular',
    fontSize: 28,
    lineHeight: 33,
    color: 'white',
  },
  loginWelcomeText: {
    paddingBottom: 10,
    fontFamily: 'Poppins_400Regular',
    fontSize: 17,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.4)'   
  },
  button: {
    elevation: 10,
    width: '95%',
    height: 65,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#57D3EC',
    borderRadius:14, 
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
  },

});

export default LoginForm;
