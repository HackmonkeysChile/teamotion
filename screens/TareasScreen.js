import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colores from '../constants/colores';
import textos from '../constants/textos';
import TareasContainer from '../components/Tareas';
import * as tareasAction from "../store/actions/tareas";
import { useSelector, useDispatch } from "react-redux";
import AwesomeAlert from 'react-native-awesome-alerts';
import Spinner from 'react-native-loading-spinner-overlay';

const TareasScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const tareas = useSelector(estado => estado.tareas.tareas);
    const personaLog = useSelector(estado => estado.personas.personas);
    const [idTarea, setIdTarea] = useState('');
    const [error, setError] = useState(false);
    const [guardado, setGuardado] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tareasAction.obtenerPorID(personaLog[0].id));
    }, [dispatch]);

    const renderGrid = (itemData) => {
        return (
            <View style={styles.gridData}>
                <View style={styles.container}>
                    <View style={styles.containerTarea}>
                        <Text style={styles.texto}><Text style={styles.titulo}>{itemData.item.titulo}: </Text>{itemData.item.descripcion}</Text>
                    </View>

                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            setIdTarea(itemData.item.id);
                            setShowAlert(true)
                        }
                        }>
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
            </View>
        );
    };

    const cambiarEstado = async () => {
        let accion;
        let idEstado = 2;
        let idTareaCambiar = parseInt(idTarea, 10);
        accion = tareasAction.actualizarEstado(idTarea, idEstado);
        setError(null);
        setShowAlert(false);
        setIsLoading(true);
        try {
            await dispatch(accion);
            setGuardado(true);
            let traer = tareasAction.obtenerPorID(personaLog[0].id);
            props.navigation.navigate('miPerfil');
            try {
                dispatch(traer);
            } catch (err) {
                
            }

        } catch (err) {
            setError(true);
        }
        setIsLoading(false);
    };

    return (
        <View style={{ flex: 1, width: '100%' }}>
            <Spinner
                visible={isLoading}
                //Texto
                textContent={''}
                textStyle={styles.spinnerTextStyle}
            />
            <ScrollView>
                <View style={styles.screen}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.superTitle}>MIS METAS</Text>
                    </View>

                    <FlatList
                        data={tareas}
                        renderItem={renderGrid}
                        style={styles.flat}
                        keyExtractor={(renderGrid, index) => index.toString()}
                    />

                </View>
            </ScrollView>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Meta terminada"
                message="¿Seguro terminaste esta meta?"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText={
                    'Cancelar'
                }
                confirmText={
                    'OK'
                }
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    setShowAlert(false)
                }}
                onConfirmPressed={cambiarEstado}

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
        </View>
    )
};
/*

 cancelText={
                    <FontAwesome name='arrow-left'
                        size={20}
                        color={'white'}
                        style={{
                            alignContent: 'center'
                        }} />
                }
                confirmText={
                    <FontAwesome name='check'
                        size={20}
                        color={'white'}
                        style={{
                            alignContent: 'center'
                        }} />
                }
*/
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    superTitle: {
        color: colores.letras,
        fontSize: textos.titulo,
        fontFamily: 'open-sans-bold'
    },
    text: {
        color: colores.letras,
        fontSize: textos.subtitulo,
        textAlign: textos.alignTexto,
        fontFamily: 'open-sans'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30,
    },
    flat: {
        width: '100%'
    },


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
        paddingVertical: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
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

export default TareasScreen;