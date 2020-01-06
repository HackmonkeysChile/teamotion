import React, {useEffect} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList, TouchableHighlight
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//md-happy superhappy
//md-sad supersad
import { MaterialCommunityIcons } from '@expo/vector-icons';
//emoticon-happy
//emoticon-sad
import { FontAwesome } from '@expo/vector-icons';
import textos from '../constants/textos';
import {useSelector, useDispatch} from "react-redux";
import * as emocionesAction from "../store/actions/emociones";
import colores from '../constants/colores';

const renderGrid = (itemData) => {
    return (
        <View style={styles.gridData}>
            <Ionicons
                name="md-happy"
                size={50}
                style={{
                    alignContent: 'center'
                }}
            />
            <Text>{itemData.item.nombre}</Text>
        </View>
    );
};

const iconito = () => {
    return (
        <FontAwesome name="check"
            size={35}
            color={'white'}
            style={{
                alignContent: 'center'
            }}
        />
    );
};

const SeleccionarEmocionScreen = props => {
    const emociones = useSelector(estado => estado.emociones.emociones);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(emocionesAction.traerEmociones());
    }, [dispatch]);
    return (
        <View style={styles.screen}>
            <View style={styles.publicaciones}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>¿CÓMO TE SIENTES?</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Selecciona una emocion</Text>
                </View>

                <FlatList
                    data={emociones}
                    horizontal={true}
                    renderItem={renderGrid}
                    keyExtractor={(renderGrid, index) => index.toString()}
                />
                <View style={styles.footer2}>
                    <TouchableHighlight onPress={() => {
                        props.navigation.navigate('SeleccionarTareaScreen')
                    }} >
                        <View style={styles.buttonView}>
                            <FontAwesome name="check"
                                size={35}
                                color={'white'}
                                style={{
                                    alignContent: 'center'
                                }} />

                        </View>
                    </TouchableHighlight>
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
    button: {
        width: '49%',
    },
    title: {
        color: colores.letras,
        fontSize: textos.sizeTitulo,
        fontFamily: textos.familyTitulo
    },
    text: {
        color: colores.letras,
        fontSize: textos.sizeTexto,
        textAlign: textos.alignTexto,
    },
    buttonView: {
        position: 'absolute',
        bottom: -20, // space from bottombar
        left: '75%',
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
        alignItems: 'center'
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

});

export default SeleccionarEmocionScreen;