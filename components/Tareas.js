import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import textos from '../constants/textos';
import colores from '../constants/colores';

const Tareas = props => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTarea}>
                <Text style={styles.texto}><Text style={styles.titulo}>Titulo: </Text>Here's an example. A common feature jiji request from developers familiar with the web is background-image</Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                <FontAwesome name="check"
                            size={15}
                            color={'white'}
                            style={{
                                alignContent: 'center'
                            }} />
                </TouchableOpacity >
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        marginBottom:15
    },
    containerTarea: {
        flex: 1,
        flexDirection: 'row',
    },
    titulo: {
        fontFamily: 'open-sans-bold',
        fontSize: textos.texto,
        color: colores.letras,
        textTransform: 'uppercase'
    },
    texto: {
        fontSize: textos.texto,
        fontFamily: 'open-sans',
        color: colores.letras,
        textAlign: 'justify'
    },
    containerButton: {
        alignItems: 'flex-end',
        bottom:7
    },
    button:{
        backgroundColor: '#05D913',
        height:32,
        width: 32,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Tareas;