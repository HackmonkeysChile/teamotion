import React from 'react';
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
    const personaLog = useSelector(estado => estado.personas.personas);
    return (

        <View style={styles.screen}>
            <ImageBackground style={styles.head} source={require('../../assets/img/curvas_lider.png')} >
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            </ImageBackground>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.titulo}>{personaLog[0].nombre} {personaLog[0].apellido}</Text>
                        <Text style={styles.rol}>Líder</Text>
                    </View>

                    <View style={styles.gustosContainer}>
                        <TouchableOpacity style={styles.infoContainer}>
                            <Text style={styles.text}>{personaLog[0].correo}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.infoContainer} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.text}>CERRAR</Text>
                </TouchableOpacity>
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
        marginBottom: 35
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
        padding: 30,
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
        alignItems: 'center'
    },
    gustosContainer: {
        marginTop: 20
    }
});

export default PerfilScreen;