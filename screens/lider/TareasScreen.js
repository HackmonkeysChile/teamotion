import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Button
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import colores from '../../constants/colores';
import textos from '../../constants/textos';
import TareasContainer from '../../components/Tareas';
import { useSelector } from 'react-redux';

const TareasScreen = props => {
    const personaLog=useSelector(estado=>estado.personas.personas);

    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.titleContainer}>
                    <Text style={styles.superTitle}>MIS METAS</Text>
                    <Text style={styles.text}>Screen Metas</Text>
                </View>
                <Button title="console log" onPress={()=> console.log(personaLog)}/>
                <TareasContainer/>

                <TareasContainer/>
                <TareasContainer/>
                <TareasContainer/>
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