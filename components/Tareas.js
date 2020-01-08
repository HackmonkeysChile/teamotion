import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import textos from '../constants/textos';
import colores from '../constants/colores';

const Tareas = props => {
    return (
        <View style={styles.containerTareas}>
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
            <View style={styles.containerHr}>
            <View style={styles.hr}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerTareas: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        width: '95%',
        flexDirection: 'row',
    },
    containerTarea: {
        flex: 1,
        flexDirection: 'row',
        width:'95%'
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
        marginLeft: 10,
        width:'5%'
    },
    button: {
        marginTop: 3,
        backgroundColor: '#05D913',
        height: 32,
        width: 32,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerHr:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10
    },
    hr: {
        borderBottomColor: 'rgb(237, 237, 237)',
        borderBottomWidth: 1,
        width: '50%',
        height:0

    }
});

export default Tareas;