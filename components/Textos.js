import React from 'react';
import { Text, StyleSheet} from 'react-native';

const Textos = props => <Text style={{...styles.body, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
   body:{
       fontFamily:'open-sans'
   } 
});

export default Textos;