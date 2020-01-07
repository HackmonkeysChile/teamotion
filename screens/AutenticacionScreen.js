import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colores from '../constants/colores';
import textos from '../constants/textos';

const AutenticacionScreen = props =>{
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');

    

    return(
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.titleContainer}>
                    <Text style={styles.superTitle}>HOLA</Text>
                    <Text style={styles.text}>TE ESTÁBAMOS ESPERANDO</Text>
                </View>
                <View style={styles.formControl}>
                    <TextInput style={styles.input}
                        placeholder="Correo"
                        placeholderTextColor="white"
                        onChangeText={text => setCorreo(text)}
                    />
                    <TextInput style={styles.input}
                        placeholder="Contraseña"
                        placeholderTextColor="white"
                        onChangeText={text => setClave(text)}
                    />
                    <TouchableOpacity onPress={() => {props.navigation.navigate('Menu')}} >
                        <View style={styles.buttonView}>
                            <FontAwesome name="check"
                                size={35}
                                color={'white'}
                                style={{
                                    alignContent: 'center'
                                }} />

                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: '5%',
        marginTop:100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formControl: {
        width: '100%',
        flex: 1,
        paddingHorizontal: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: colores.primario,
        fontSize: textos.titulo,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        textTransform: 'uppercase',
        marginBottom: 15
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
    },
    buttonView: {
        marginTop:50,
        height: 55,
        width: 55,
        borderRadius: 58,
        backgroundColor: '#04D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AutenticacionScreen;