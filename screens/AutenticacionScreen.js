
import React, { useState, useReducer, useCallback, useEffect } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    ImageBackground,
    Image
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { FontAwesome } from '@expo/vector-icons';
import colores from '../constants/colores';
import textos from '../constants/textos';
import Input from '../components/Input';
import { useDispatch, useSelector } from "react-redux";
import * as tareasAction from "../store/actions/tareas";
import * as personasAction from "../store/actions/personas";

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';


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

const AutenticacionScreen = props => {
    console.disableYellowBox = true;
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [auth, setAuth] = useState(false);
    const [placeholderCorreo, setPlaceholderCorreo] = useState('CORREO');
    const [placeholderClave, setPlaceholderClave] = useState('CLAVE');
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

    const personas = useSelector(estado => estado.personas.personas);

    useEffect(() => {
        if (error) {
            setShowAlert(true)
        }
        if (auth) {
            if (personas.length > 0) {

                if (personas[0].idRol === 1) {
                    let traer =tareasAction.obtenerTareas();
                    try {
                        dispatch(traer);
                    } catch (err) {

                    }
                    props.navigation.navigate('MenuLider');
                } else if (personas[0].idRol === 2) {
                    props.navigation.navigate('Menu');
                    let traer = tareasAction.obtenerPorID(personas[0].id);
                    try {
                        dispatch(traer);
                    } catch (err) {
                        
                    }
                }
            }
        }
    }, [
        error, auth
    ]);

    const logear = async () => {
        let accion;
        accion = personasAction.autenticarPersona(formState.inputValues.correo, formState.inputValues.clave);

        setError(null);
        setIsLoading(true);
        try {
            await dispatch(accion);
            setAuth(true);

        } catch (err) {
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
        <View style={styles.screen}>

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
                            label="Correo"
                            email
                            autoCapitalize="none"
                            minLength={1}
                            placeholderTextColor="white"
                            errorText="Ingrese un correo valido"
                            onInputChange={inputChangeHandler}
                            initialValue=""
                            style={styles.input}
                        />
                        <Input
                            id="clave"
                            keyboardType="default"
                            secureTextEntry
                            label="Clave"
                            required
                            minLength={1}
                            autoCapitalize="none"
                            placeholderTextColor="white"
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
                                    <Image  style={styles.icono} source={require('../assets/img/icono_check_login.png')} />

                                </TouchableOpacity>
                            )
                        }


                    </View>
                </ScrollView>
            </View>

            <ImageBackground source={require('../assets/img/curvas_1.png')} style={styles.img} />

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Datos invalidos"
                message="Los datos ingresados no son validos, vuelva a ingresarlos nuevamente"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                cancelText={'Cancelar'}
                confirmText={'OK'}
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    setShowAlert(false)
                }}
                onConfirmPressed={() => {
                    setShowAlert(false)
                }}

                contentContainerStyle={{ backgroundColor: colores.primario, borderRadius: 20, width: '80%' }}
                titleStyle={{ color: 'white', textTransform: 'uppercase', fontFamily: 'open-sans-bold' }}
                messageStyle={{ color: 'white', fontFamily: 'open-sans' }}
                confirmButtonStyle={{justifyContent: 'center',
                    alignItems: 'center', backgroundColor: '#04D9D9',
                }}

            />
        </View>
    );
};
/*
<FontAwesome name='check'
                        size={20}
                        color={'white'}
                        style={{
                            alignContent: 'center'
                        }} />
*/
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    card: {
        width:'80%'
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
        marginBottom: 20
    },
    buttonView: {
        height: 60,
        width: 60,
        marginTop: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonViewLoading: {
        height: 60,
        width: 60,
        marginTop: 50,
        borderRadius: 50,
        backgroundColor: colores.secundario,
        justifyContent: 'center',
        alignItems: 'center',
    },
    foot: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center'
    },
    img: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: 175,
        width: '100%',
        justifyContent: 'center',
    },
    icono: {
        height: 55,
        width: 55,
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
      }
});

export default AutenticacionScreen;