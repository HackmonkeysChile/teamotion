import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ComenzarDaily from './ComenzarDaily';
import colores from '../constants/colores';

const HomePage = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>HOLA</Text>
            <Text style={styles.text}>fefsdz</Text>
            <Button
                title="Comenzar"
                style={styles.button}
                onPress={() => props.navigation.navigate('SeleccionarEmocionScreen')
                }
            />
            <View style={styles.footer}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        color: colores.letras,
        fontSize: 50,
        fontFamily: 'open-sans-bold'
    },
    text:{
        color: colores.letras,
        fontSize: 30,
        textAlign:'left'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFED70',
        height: 15,
        width: '100%'
    }
});
export default HomePage;