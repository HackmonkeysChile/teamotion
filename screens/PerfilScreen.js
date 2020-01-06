import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import colores from '../constants/colores';
import textos from '../constants/textos';

const PerfilScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.header}>
                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <View style={styles.tituloContainer}>
                            <Text style={styles.titulo}>Felipe Días Fernandez</Text>
                            <Text style={styles.rol}>Colaborador</Text>
                        </View>

                        <TouchableOpacity style={styles.infoContainer}>
                            <Text style={styles.text}>Opcion 1 ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram ex</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.infoContainer}>
                            <Text style={styles.text}>Opcion 2</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 150
    },
    body: {
        marginTop: 60,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    infoContainer: {
        marginTop: 10,
        height: 'auto',
        padding: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        width: '100%',
        borderRadius: 30,
        backgroundColor: colores.secundario,
    },
    text: {
        color: colores.letras,
        textAlign: 'center',
        fontSize: textos.texto
    },
    titulo: {
        fontFamily: 'open-sans-bold',
        fontSize: textos.titulo,
        color: colores.letras,
        textTransform: 'uppercase'
    },
    rol: {
        fontFamily: 'open-sans-bold',
        fontSize: textos.subtitulo,
        color: colores.letras,
        textTransform: 'uppercase'
    },
    tituloContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PerfilScreen;