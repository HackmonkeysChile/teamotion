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


const SeleccionarEmocionScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [emocion, setEmocion] = useState('');
    const [error, setError] = useState(false);
    const [guardado, setGuardado] = useState(false);

    const personaLog = useSelector(estado => estado.personas.personas);
    const emociones = useSelector(estado => estado.emociones.emociones);
    const dispatch = useDispatch();

    const renderGrid = (itemData) => {
        return (
            <View style={styles.gridData}>
                <TouchableOpacity onPress={() => setEmocion(itemData.item.id)}>
                    <Ionicons
                        name="md-happy"
                        size={50}
                        style={{ alignContent: 'center' }} />
                </TouchableOpacity>
                <Text style={styles.nombreEmocion}>{itemData.item.nombre}</Text>
            </View>
        );
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
        }
    }, [
        error, guardado
    ]);

    const guardar = async () => {
        let accion;
        let idPersona = personaLog[0].id;
        let idEmocion = parseInt(emocion, 10);

        accion = dailyAction.ingresarDaily(idPersona, idEmocion);
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(accion);
            setGuardado(true);

        } catch (err) {
            setError(true);
        }
        setIsLoading(false);

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
                    <FlatList
                        data={emociones}
                        horizontal={true}
                        renderItem={renderGrid}
                        keyExtractor={(renderGrid, index) => index.toString()}
                    />
                </View>
            </ScrollView>

            <View style={styles.foot}>
                <View style={styles.contentBoton} >
                    <TouchableOpacity
                        onPress={() => { props.navigation.navigate('HomePage') }}
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
                        onPress={guardar}
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
        padding: '8%'
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
        textAlign: textos.alignTexto,
        fontFamily: 'open-sans'
    },
    textContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 10,
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
        margin: 15,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
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

});

export default SeleccionarEmocionScreen;