import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomePage from './screens/HomePage';
import NavEjemplo from './navigation/NavEjemplo';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      
      <NavEjemplo/>   
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  footer:{
    position: 'absolute',
    bottom: 0,
    backgroundColor:'#FFED70',
    height: 60,
    width:'100%'
  }
});