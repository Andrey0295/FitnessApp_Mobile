import {
  Poppins_400Regular, useFonts
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import * as React from 'react';
import { Text } from 'react-native';

interface CustomTextProps {
  children: string,
  style?: {
    
  }
}




const CustomText = (props: CustomTextProps) => {
    
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
    
  if (!fontsLoaded) {
    return <AppLoading />;
  } else { return (
    <Text {...props}>{props.children}</Text>

  );}

    
};




export default CustomText;