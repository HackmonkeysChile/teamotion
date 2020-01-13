import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colores from '../constants/colores';
import textos from '../constants/textos';
import TareasContainer from '../components/Tareas';
import * as tareasAction from "../store/actions/tareas";
import { useSelector, useDispatch } from "react-redux";
import AwesomeAlert from 'react-native-awesome-alerts';


const TareasScreen = props => {
    const [showAlert, setShowAlert] = useState(false);
    const tareas = useSelector(estado => estado.tareas.tareas);

    const renderGrid = (itemData) => {
        return (
            <View style={styles.gridData}>
                <View style={styles.container}>
                    <View style={styles.containerTarea}>
                        <Text style={styles.texto}><Text style={styles.titulo}>{itemData.item.titulo}: </Text>{itemData.item.descripcion}</Text>
                    </View>

                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button} key={itemData.item.id} onPress={() => setShowAlert(true)}>
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
    
    const guardar = async () => {
        let accion;
        
        accion = dailyAction.ingresarDaily(idPersona, idEmocion);
        setError(null);
        try {
            await dispatch(accion);
            setGuardado(true);

        } catch (err) {
            setError(true);
        }

    };

    return (
        <View style={{ flex: 1, width: '100%' }}>
            <ScrollView>
                <View style={styles.screen}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.superTitle}>MIS METAS</Text>
                        <Text style={styles.text}>Screen Metas</Text>
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
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    setShowAlert(false)
                }}
                onConfirmPressed={() => {
                    hideAlert();
                }}
                contentContainerStyle={{ backgroundColor: colores.primario, borderRadius: 20, width: '80%' }}
                titleStyle={{ color: 'white', textTransform: 'uppercase', fontFamily: 'open-sans-bold' }}
                messageStyle={{ color: 'white', fontFamily: 'open-sans' }}
                confirmButtonStyle={{ width: 45, height: 45, borderRadius: 30,justifyContent: 'center',
                alignItems: 'center', backgroundColor:'#04D9D9', marginLeft:20}}
                cancelButtonStyle={{ width: 45, height: 45, borderRadius: 30,justifyContent: 'center',
                alignItems: 'center', backgroundColor:'#04D9D9', marginRight:20}}
            />
        </View>
    )
};

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