import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { facebookIcon, googleIcon } from '../../../assets/images';
import CustomText from '../../components/custom-components/CustomText';








const ProviderAuthBlock = () => {
  return (    
    <View style={styles.providerContainer}>
      <TouchableOpacity style={styles.providerBtn}>
        <Image
          source={googleIcon}
          style={styles.iconProvider} />
        <CustomText style={styles.providerText}>
        Sign up with Google
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.providerBtn}>
        <Image
          source={facebookIcon}
          style={styles.iconProvider} />
        <CustomText style={styles.providerText}>
        Sign up with Facebook
        </CustomText>
      </TouchableOpacity>
    </View>
  );

};


const styles = StyleSheet.create({
  providerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',

  },
  providerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '45%',
    height: 68,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    fontFamily: 'Poppins_400Regular'
  },
  providerText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 11,
    color: 'white',
  },
  iconProvider: {
    width: 18,
    height: 18,
  }
});


export default ProviderAuthBlock;
