import React, { useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Picker,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import textos from '../../constants/textos';
import colores from '../../constants/colores';


import { useSelector, useDispatch } from "react-redux";

const CrearTarea = props => {
    return (
        <View>
            <ScrollView>
                <View style={styles.publicaciones}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Nueva Tarea</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Ingresa los datos</Text>
                    </View>
                </View>

                <Picker
                    style={{ height: 50, width: 100 }}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </ScrollView>
            <View style={styles.foot}>
                <View style={styles.contentBoton} >
                    <TouchableOpacity
                        style={styles.buttonView}
                        activeOpacity={.5}
                    >
                        <FontAwesome name="arrow-left"
                            size={35}
                            color={'white'}
                            style={{
                                alignContent: 'center'
                            }} />
                    </TouchableOpacity>
                    <Text style={styles.textoButton}>Volver</Text>
                </View>
                <View style={{ width: '34%' }} />
                <View style={styles.contentBoton}  >
                    <TouchableOpacity
                        style={styles.buttonView}
                        activeOpacity={.5} >
                        <FontAwesome name="check"
                            size={35}
                            color={'white'}
                            style={{
                                alignContent: 'center'
                            }} />
                    </TouchableOpacity>
                    <Text style={styles.textoButton}>Listo</Text>
                </View>
            </View>
        </View>
    )
}

CrearTarea.navigationOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colores.primario : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colores.primario
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    publicaciones: {
        flex: 1,
        paddingHorizontal: '8%',
        paddingVertical: 25
    },
    title: {
        color: colores.letras,
        fontSize: textos.titulo,
        fontFamily: 'open-sans-bold',
        textTransform: 'uppercase'
    },
    text: {
        color: colores.letras,
        fontSize: textos.subtitulo,
        textAlign: textos.alignTexto,
        fontFamily: 'open-sans',
    },
    textContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    foot: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: colores.primario,
        borderTopWidth: 15,
        height: 65,
        width: '100%',
        borderTopColor: colores.secundario,
        justifyContent: 'center'
    },
    contentBoton: {
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonView: {
        bottom: 30,
        height: 55,
        width: 55,
        borderRadius: 58,
        backgroundColor: '#04D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoButton: {
        bottom: 30,
        color: 'white',
        fontFamily: 'open-sans-bold'
    },
});

export default CrearTarea;