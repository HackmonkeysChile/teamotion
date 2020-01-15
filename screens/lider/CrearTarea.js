import React, { useState, useReducer, useCallback, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    ScrollView,
    Image,
    TouchableOpacity,
    Picker
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import InputTarea from '../../components/InputTarea';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import textos from '../../constants/textos';
import colores from '../../constants/colores';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

import * as personasAction from "../../store/actions/personas";
import { useSelector, useDispatch } from "react-redux";

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value,

        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const CrearTarea = props => {
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch();
    const [valorItem, setValorItem] = useState('');

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            correo: '',
            clave: ''
        },
        inputValidities: {
            correo: false,
            clave: false
        },
        formIsValid: false
    });

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            });
        },
        [dispatchFormState]
    );

    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={styles.publicaciones}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Ingresar tarea</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Próximamente podrá ingresar una nueva tarea dentro de este formulario!</Text>
                    </View>

                </View>
                <View style={{ width: '100%', flexDirection: 'row', }}>
                    <View style={{ width: '28%', maxWidth: 85, height: 550, marginTop: 20 }}>
                        <Image source={require('../../assets/img/curvas_4_izq.png')} style={{ width: '100%', height: 440 }} />
                    </View>
                    <View style={{ width: '60%', height: 550 }}>

                        <View style={styles.formControl}>
                            <InputTarea
                                label="Título"
                                id="titulo"
                                editable={false}
                                autoCapitalize="none"
                                minLength={1}
                                placeholderTextColor="white"
                                onInputChange={inputChangeHandler}
                                initialValue=""
                                style={styles.inp}
                            />

                            <InputTarea
                                label="Descripción"
                                id="descripcion"
                                editable={false}
                                autoCapitalize="none"
                                minLength={1}
                                placeholderTextColor="white"
                                onInputChange={inputChangeHandler}
                                initialValue=""
                                style={styles.inp}
                            />
                             <InputTarea
                                label="Persona"
                                id="descripcion"
                                editable={false}
                                autoCapitalize="none"
                                placeholder="-Seleccionar-"
                                placeholderTextColor="white"
                                onInputChange={inputChangeHandler}
                                initialValue="-Seleccionar-"
                                style={styles.inp}
                            />
                        </View>
                        
                    </View>
                    <View style={{ width: '28%', maxWidth: 85, height: 550, marginTop: 20 }}>
                        <Image source={require('../../assets/img/curvas_4_der.png')} style={{ width: '100%', height: 440 }} />
                    </View>
                </View>
            </ScrollView>

            <View style={styles.foot}>
                <View style={styles.contentBoton} >

                    <TouchableOpacity
                        style={styles.buttonView}
                        activeOpacity={.5}
                        onPress={() => props.navigation.navigate('Home')}
                    >
                        <FontAwesome name="arrow-left"
                            size={35}
                            color={'white'}
                            style={{
                                alignContent: 'center',
                            }} />

                    </TouchableOpacity>
                    <Text style={styles.textoButton}>Volver</Text>
                </View>
                <View style={{ width: '34%' }} // CONTENEDOR BOTON GUARDAR TAREA
                />

                <View style={styles.contentBoton}  >

                </View>
            </View>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="No guardada"
                message="La tarea ingresada no se ha guardado"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText={'OK'}
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    setShowAlert(false);
                    props.navigation.navigate('Home');
                }}

                contentContainerStyle={{ backgroundColor: colores.primario, borderRadius: 20, width: '80%' }}
                titleStyle={{ color: 'white', textTransform: 'uppercase', fontFamily: 'open-sans-bold' }}
                messageStyle={{ color: 'white', fontFamily: 'open-sans' }}
                confirmButtonStyle={{
                    justifyContent: 'center',
                    alignItems: 'center', backgroundColor: '#04D9D9',
                }}

            />
        </View>
    )
}


/*
BOTON PARA GUARDAR TAREA INGRESADA

<TouchableOpacity onPress={()=>{setShowAlert(true)}}
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

*/
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
    emocionesContainer: {
        flex: 1,
        padding: '2%'
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
    nombreEmocion: {
        fontSize: textos.texto,
        color: colores.letras,
        textAlign: textos.alignTexto,
        fontFamily: 'open-sans',
        marginTop: 2,
    },
    nombreEmocionGrande: {
        fontSize: textos.subtitulo,
        color: colores.letras,
        textAlign: textos.alignTexto,
        fontFamily: 'open-sans-bold',
        marginTop: 2,
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

    buttonView: {
        bottom: 30,
        height: 55,
        width: 55,
        borderRadius: 58,
        backgroundColor: colores.primario,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridData: {
        marginTop: 0,
        marginBottom: 0,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    foot: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: colores.botones,
        borderTopWidth: 15,
        height: 65,
        width: '100%',
        borderTopColor: colores.secundario,
        justifyContent: 'center'
    },
    textoButton: {
        bottom: 30,
        color: 'white',
        fontFamily: 'open-sans-bold'
    },
    contentBoton: {
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputPicker: {
        width: '100%',
        paddingHorizontal: 19,
        paddingVertical: 10,
        borderRadius: 23,
        backgroundColor: colores.primario,
        fontSize: textos.titulo,
        color: 'white',
        textAlign: 'left',
        fontFamily: 'open-sans-bold',

    },
    label: {
        fontFamily: 'open-sans-bold',
        color: colores.letras,
    },
    inp:{
        fontFamily: 'open-sans-bold',
        color: colores.letras,
    }
});

export default CrearTarea;