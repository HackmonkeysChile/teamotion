

import React, { useState, useReducer, useCallback, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colores from '../constants/colores';
import textos from '../constants/textos';
import Input from '../components/Input';
import {  useDispatch } from "react-redux";

import * as personasAction from "../store/actions/personas";
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
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

const AutenticacionScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

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

    useEffect(() => {
        if (error) {
            Alert.alert('Ha ocurrido un error!', error, [{ text: 'Okey' }])
        }
    }, [
        error
    ]);

    const logear = async () => {
        let accion;
        accion = personasAction.autenticarPersona(formState.inputValues.correo, formState.inputValues.clave)
        console.log(formState.inputValues.correo);
        setError(null);
        setIsLoading(true);

        try {
            await dispatch(accion);
            props.navigation.navigate('Menu');
        } catch (err) {
            console.log(err);
            setError(err.message);
        }

        setIsLoading(false);
    };

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
        <KeyboardAvoidingView behavior="padding"
            keyboardVerticalOffset={50} style={styles.key}>
            <View style={styles.card}>
                <ScrollView>
                    <View style={styles.titleContainer}>
                        <Text style={styles.superTitle}>HOLA</Text>
                        <Text style={styles.text}>TE ESTÁBAMOS ESPERANDO</Text>
                    </View>
                    <View style={styles.formControl}>
                        <Input
                            id="correo"
                            keyboardType="email-address"
                            required
                            email
                            autoCapitalize="none"
                            minLength={1}
                            errorText="Ingrese un correo valido"
                            onInputChange={inputChangeHandler}
                            initialValue=""

                        />
                        <Input
                            id="clave"
                            keyboardType="default"
                            secureTextEntry
                            required
                            minLength={1}
                            autoCapitalize="none"
                            errorText="Ingrese una clave valida"
                            onInputChange={inputChangeHandler}
                            initialValue=""
                        />
                        {isLoading ? (
                            <TouchableOpacity title="Login" style={styles.buttonViewLoading}>
                                <ActivityIndicator size="small" color={'white'} />
                            </TouchableOpacity>

                        ) : (
                                <TouchableOpacity title="Login" onPress={logear} style={styles.buttonView}>
                                    <FontAwesome name="check"
                                        size={35}
                                        color={'white'}
                                        style={{
                                            alignContent: 'center'
                                        }} />
                                </TouchableOpacity>
                            )
                        }


                    </View>
                </ScrollView>
            </View>

        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    key: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        minWidth: 300,
        maxWidth: 800,
        maxHeight: 390,
    },
    formControl: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginBottom:20
    },
    buttonView: {
        height: 55,
        width: 55,
        marginTop: 80,
        borderRadius: 58,
        backgroundColor: '#04D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonViewLoading: {
        height: 55,
        width: 55,
        marginTop: 80,
        borderRadius: 58,
        backgroundColor: colores.secundario,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AutenticacionScreen;