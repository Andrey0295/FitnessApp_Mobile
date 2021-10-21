import { Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import * as React from 'react';
import { StyleSheet, Text } from 'react-native';




const LogoText = (): JSX.Element => {
    
  const [fontsLoaded] = useFonts({
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  } else {     
    return(

      <Text style={styles.logoText}>
        Fitnest<Text style={styles.logoLastChar}>X</Text>
      </Text >
    );

  }

};


const styles = StyleSheet.create({
  logoText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 36,
    marginBottom: 50,
    marginTop: 60,
        
  },
  logoLastChar: {
    color: 'white',
    fontFamily: 'Poppins_700Bold',
    fontSize: 36,
  }
    
});


export default LogoText;