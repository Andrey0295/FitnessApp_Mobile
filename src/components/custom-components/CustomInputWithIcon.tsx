import * as React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TextInput, View } from 'react-native';



interface CustomInputProps {
    source: ImageSourcePropType,
    placeholder: string,
    secureTextEntry?: boolean
}



const CustomInputWithIcon = (props: CustomInputProps): JSX.Element => {
  const [inputColor, setInputColor] = React.useState('rgba(255, 255, 255, 0.2)');
    
  function onInputFocus() {
    setInputColor('rgba(255, 255, 255, 0.6)');
  }
    
  function onInputBlur() {
    setInputColor('rgba(255, 255, 255, 0.2)');
  }

  return (
    <View style={styles.inputBlock}>
      <TextInput {...props}  onFocus={onInputFocus} onBlur={onInputBlur} style={{ ...styles.input, backgroundColor: inputColor }}/>
      <Image source={props.source} style={ styles.icon}/>
    </View>
           
        
  );
};


const styles = StyleSheet.create({
  inputBlock: {
    width: '95%',
  },
  input: {
    width: '100%',
    height: 65,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderRadius: 14,
    paddingLeft: 38,
    marginBottom: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },

  icon: {
    position: 'absolute',
    top: 23,
    left: 10,
    width: 18,
    height: 18,
  },
});


export default CustomInputWithIcon;
