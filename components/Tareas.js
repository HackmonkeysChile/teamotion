import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AwesomeAlert from 'react-native-awesome-alerts';
import textos from '../constants/textos';
import colores from '../constants/colores';

const Tareas = props => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTarea}>
                <Text style={styles.texto}><Text style={styles.titulo}>{props.titulo}: </Text>{props.descripcion}</Text>
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={() => showAlert(true)}>
                    <FontAwesome name="check"
                        size={15}
                        color={'white'}
                        style={{
                            alignContent: 'center'
                        }} />
                </TouchableOpacity >
                <Text style={styles.textoPequeño}>Terminada</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerTareas: {
        flex: 1,
        width: '100%',
        backgroundColor: 'blue'
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 15
    },
    containerTarea: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical:5,
        paddingHorizontal:15,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: colores.secundario,

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
    textoPequeño: {
        fontSize: textos.miniTexto,
        fontFamily: 'open-sans',
        color: colores.letras,
        textAlign: 'justify',
    },
    containerButton: {
        width: '15%',
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#05D913',
        height: 32,
        width: 32,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Tareas;