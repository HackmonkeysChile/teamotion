import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomePage from './screens/HomePage';
import Header from './components/Header';
import NavColaborador from './navigation/NavColaborador';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import colaboradorReducer from './store/reducers/colaborador';
import { Provider } from 'react-redux';
import Colaborador from './models/Colaborador';

const rootReducer = combineReducers({
  colab: colaboradorReducer
});

const store = createStore(rootReducer);

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
    <Provider store={store}><NavColaborador/></Provider>
  );
  return (
    <View style= {styles.screen}>
      <NavColaborador />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFED70',
    height: 60,
    width: '100%'
  }
});