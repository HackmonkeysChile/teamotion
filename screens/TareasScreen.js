import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import colores from '../constants/colores';
import textos from '../constants/textos';


const TareasScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.titleContainer}>
                    <Text style={styles.superTitle}>HOLA</Text>
                    <Text style={styles.text}>Screen Metas</Text>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    superTitle: {
        color: colores.letras,
        fontSize: textos.superTitle,
        fontFamily: 'open-sans-bold'
    },
    text: {
        color: colores.letras,
        fontSize: textos.subtitulo,
        textAlign: textos.alignTexto,
        fontFamily: 'open-sans-bold'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 20,
    }
});

export default TareasScreen;