import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import colores from '../constants/colores';
import textos from '../constants/textos';

const HomePage = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.publicaciones}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>¡TEN UN BUEN DÍA!</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Publicación de hoy</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <Image style={styles.img} source={require('../assets/icon.png')} />
                    </View>

                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    title: {
        color: colores.letras,
        fontSize: textos.titulo,
        fontFamily: 'open-sans-bold'
    },
    text: {
        color: colores.letras,
        fontSize: textos.subtitulo,
        textAlign: textos.alignTexto,
    },
    screen: {
        flex: 1,
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
    publicaciones: {
        flex: 1,
        padding: '8%'
    },
    img: {
        width: '100%',
        height: 345
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    }
});
export default HomePage;