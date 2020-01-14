import React, {useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Button,
    FlatList,

} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import colores from '../../constants/colores';
import textos from '../../constants/textos';
import TareasContainer from '../../components/Tareas';
import { useSelector, useDispatch } from 'react-redux';
import * as tareasAction from "../../store/actions/tareas";
const TareasScreen = props => {
    const tareas = useSelector(estado=>estado.tareas.tareasTodas);

    const dispatch = useDispatch();

    const renderGrid = (itemData) => {
        return (
            <View style={styles.gridData}>
                <View style={styles.container}>
                    <View style={styles.containerTarea}>
                        <Text style={styles.texto}><Text style={styles.titulo}>{itemData.item.titulo}: </Text>{itemData.item.descripcion}</Text>
                    </View>
                </View>
            </View>
        );
    };

    useEffect(() => {
        dispatch(tareasAction.obtenerTareas());
    }, [dispatch]);

    return (
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
    }
});

export default TareasScreen;