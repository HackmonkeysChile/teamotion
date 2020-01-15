import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import colores from '../../constants/colores';
import textos from '../../constants/textos';
import { useSelector } from 'react-redux';

const PerfilScreen = props => {
    const persona = useSelector(estado => estado.personas.personas);
    
    return (
        <View style={styles.screen}>
            <ImageBackground style={styles.head} source={require('../../assets/img/curvas_lider.png')} >
            <TouchableOpacity style={styles.cerrarSesion} onPress={() => props.navigation.navigate('Login')}>
                        <Text style={styles.textBlanco}>CERRAR SESIÓN</Text>
                    </TouchableOpacity>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            </ImageBackground>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.titulo}>{persona[0].nombre} {persona[0].apellido}</Text>
                        <Text style={styles.rol}>Colaborador</Text>
                        <Text style={styles.textoChico}>{persona[0].correo}</Text>
                    </View>

                    <Text style={styles.textoChico}>¡Próximamente podras ingresar tus gustos personales!</Text>
                    <View style={styles.gustosContainer}>
                        <Image source={require('../../assets/img/icono_proyectos.png')} style={styles.img} />
                        <TouchableOpacity style={styles.infoContainer}>
                            <Text style={styles.text}>Proyectos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gustosContainer}>
                        <Image source={require('../../assets/img/icono_peliculas.png')} style={styles.img} />
                        <TouchableOpacity style={styles.infoContainer}>
                            <Text style={styles.text}>Películas y series</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gustosContainer}>
                        <Image source={require('../../assets/img/icono_deportes.png')} style={styles.img} />
                        <TouchableOpacity style={styles.infoContainer}>
                            <Text style={styles.text}>Deportes</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gustosContainer}>
                        <Image source={require('../../assets/img/icono_musica.png')} style={styles.img} />
                        <TouchableOpacity style={styles.infoContainer}>
                            <Text style={styles.text}>Música</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    head: {
        justifyContent: 'center',
        width: '100%',
        height: 120,
        marginBottom: 50
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        bottom: -50,
        position: 'absolute'
    },
    body: {
        flex: 1,
        paddingHorizontal: 35,
        width: '100%'
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
        alignItems: 'center',
        marginBottom: 15
    },
    gustosContainer: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 20,
        height: 20,
        marginRight: 15
    },
    textoChico: {
        fontFamily: 'open-sans',
        fontSize: textos.texto,
        color: colores.letras,
        textAlign:'center'
    },
    cerrarSesion: {
        height: 'auto',
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft:20,
        width: 100,
        borderRadius: 30,
        backgroundColor: colores.botones,
        marginTop:-17
    },
    textBlanco: {
        color: 'white',
        textAlign: 'center',
        fontSize: textos.texto,
        textTransform:'uppercase',
        fontFamily: 'open-sans-bold',
    },
});

export default PerfilScreen;