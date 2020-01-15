import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView, Alert, ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import textos from '../constants/textos';
import colores from '../constants/colores';
import { useSelector, useDispatch } from "react-redux";
import * as emocionesAction from "../store/actions/emociones";
import * as personasAction from "../store/actions/personas";
import * as dailyAction from "../store/actions/daily";
import Spinner from 'react-native-loading-spinner-overlay';
import AwesomeAlert from 'react-native-awesome-alerts';

const SeleccionarEmocionScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [emocion, setEmocion] = useState('');
    const [error, setError] = useState(false);
    const [guardado, setGuardado] = useState(false);
    const [imagen1, setImagen1] = useState(false);
    const [imagen2, setImagen2] = useState(false);
    const [imagen3, setImagen3] = useState(false);
    const [imagen4, setImagen4] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertNo, setShowAlertNo] = useState(false);
    const personaLog = useSelector(estado => estado.personas.personas);
    const emociones = useSelector(estado => estado.emociones.emociones);
    const dispatch = useDispatch();

    const renderGrid = (itemData) => {
        if (itemData.item.id === 1) {
            return (
                <View style={styles.gridData}>
                    <TouchableOpacity onPress={() => { setEmocion(itemData.item.id); setImagen1(true); setImagen2(false); setImagen3(false); setImagen4(false); }} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/img/excelente.png')}
                            style={imagen1 ? styles.imgGrande : styles.img}
                        />
                    </TouchableOpacity>
                    <Text
                        style={imagen1 ? styles.nombreEmocionGrande : styles.nombreEmocion}
                    >{itemData.item.nombre}</Text>
                </View>
            );

        } else if (itemData.item.id === 2) {
            return (
                <View style={styles.gridData}>
                    <TouchableOpacity onPress={() => { setEmocion(itemData.item.id); setImagen1(false); setImagen2(true); setImagen3(false); setImagen4(false); }} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/img/bien.png')}
                            style={imagen2 ? styles.imgGrande : styles.img}
                        />
                    </TouchableOpacity>
                    <Text style={imagen2 ? styles.nombreEmocionGrande : styles.nombreEmocion}>{itemData.item.nombre}</Text>
                </View>
            );

        } else if (itemData.item.id === 3) {
            return (
                <View style={styles.gridData}>
                    <TouchableOpacity onPress={() => { setEmocion(itemData.item.id); setImagen1(false); setImagen2(false); setImagen3(true); setImagen4(false); }} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/img/no_muy_bien.png')}
                            style={imagen3 ? styles.imgGrande : styles.img} />
                    </TouchableOpacity>
                    <Text style={imagen3 ? styles.nombreEmocionGrande : styles.nombreEmocion}>{itemData.item.nombre}</Text>
                </View>
            );

        } else if (itemData.item.id === 4) {
            return (
                <View style={styles.gridData}>
                    <TouchableOpacity
                        onPress={() => { setEmocion(itemData.item.id); setImagen1(false); setImagen2(false); setImagen3(false); setImagen4(true); }}
                    >
                        <Image
                            source={require('../assets/img/terrible.png')}
                            style={imagen4 ? styles.imgGrande : styles.img} />
                    </TouchableOpacity>
                    <Text style={imagen4 ? styles.nombreEmocionGrande : styles.nombreEmocion}>{itemData.item.nombre}</Text>
                </View>
            );
        }

    };
    useEffect(() => {
        dispatch(emocionesAction.traerEmociones());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            Alert.alert('Ha ocurrido un error!', error, [{ text: 'Okey' }])
        }
        if (guardado) {
            props.navigation.navigate('HomePage');
            setGuardado(false);
            setImagen1(false)
            setImagen2(false)
            setImagen3(false)
            setImagen4(false)
        }
    }, [
        error, guardado
    ]);

    const guardar = async () => {
        let accion;
        let idPersona = personaLog[0].id;
        let idEmocion = parseInt(emocion, 10);
        setEmocion('');
        accion = dailyAction.ingresarDaily(idPersona, idEmocion);
        setError(null);
        setIsLoading(true);
        setShowAlert(false);
        try {
            await dispatch(accion);
            setGuardado(true);
            setEmocion('');
            setShowAlert(false);

        } catch (err) {
            setError(true);
        }
        setShowAlert(false);
        setIsLoading(false);
        setEmocion('');

    };

    return (
        <View style={styles.screen}>
            <Spinner
                visible={isLoading}
                //Texto
                textContent={''}
                textStyle={styles.spinnerTextStyle}
            />
            <ScrollView>
                <View style={styles.publicaciones}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>¿Cómo te sientes hoy?</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Selecciona una emoción:</Text>
                    </View>

                </View>
                <View style={{ width: '100%', flexDirection: 'row', }}>
                    <View style={{ width: '28%',maxWidth:85, height: 550, marginTop: 20 }}>
                        <Image source={require('../assets/img/curvas_4_izq.png')} style={{ width: '100%', height: 440 }} />
                    </View>
                    <FlatList
                        data={emociones}
                        horizontal={false}
                        renderItem={renderGrid}
                        style={{ width: '40%', height: 550 }}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        keyExtractor={(renderGrid, index) => index.toString()}
                    />
                    <View style={{ width: '28%',maxWidth:85, height: 550, marginTop: 20 }}>
                        <Image source={require('../assets/img/curvas_4_der.png')} style={{ width: '100%', height: 440 }} />
                    </View>
                </View>
            </ScrollView>

            <View style={styles.foot}>
                <View style={styles.contentBoton} >
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('HomePage')
                            setImagen1(false);
                            setImagen2(false);
                            setImagen3(false);
                            setImagen4(false);
                            setEmocion('');
                        }}
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
                        onPress={() => {
                            console.log(emocion);
                            if (emocion === '' || emocion=== 0) {
                                setShowAlertNo(true)
                            } else {
                                setShowAlert(true)
                            }
                        }}
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


            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Registrar emoción"
                message="¿Seguro de registrar emoción?"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText={
                    'Cancelar'
                }
                confirmText={
                    'Sí'
                }
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    setShowAlert(false)
                }}
                onConfirmPressed={guardar}

                contentContainerStyle={{ backgroundColor: colores.primario, borderRadius: 20, width: '80%' }}
                titleStyle={{ color: 'white', textTransform: 'uppercase', fontFamily: 'open-sans-bold' }}
                messageStyle={{ color: 'white', fontFamily: 'open-sans' }}
                confirmButtonStyle={{
                    justifyContent: 'center',
                    alignItems: 'center', backgroundColor: '#04D9D9',
                }}
                cancelButtonStyle={{
                    justifyContent: 'center',
                    alignItems: 'center', backgroundColor: '#04D9D9',
                }}
            />

            <AwesomeAlert
                show={showAlertNo}
                showProgress={false}
                title="Ingrese emoción"
                message="Por favor ingrese una emoción para continuar"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText={
                    'Entendido'
                }
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => setShowAlertNo(false)}
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
};

SeleccionarEmocionScreen.navigationOptions = {
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
        backgroundColor: '#04D9D9',
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
        backgroundColor: colores.primario,
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
    spinnerTextStyle: {
        color: '#FFF',
    },

    img: {
        alignContent: 'center',
        height: 70,
        width: 70
    },
    imgGrande: {
        alignContent: 'center',
        height: 100,
        width: 100
    }
});

export default SeleccionarEmocionScreen;