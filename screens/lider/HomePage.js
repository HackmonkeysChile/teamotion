import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import colores from '../../constants/colores';
import textos from '../../constants/textos';


const HomePage = props => {
    console.disableYellowBox = true;
    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.publicaciones}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>¡ANIMA A TU EQUIPO!</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Publicación de hoy</Text>
                    </View>
                    <View style={{alignItems: 'center',
        justifyContent: 'center',}}>
                       <ScrollView style={styles.imgContainer2}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                        >
                            <Image style={styles.img2} source={require('../../assets/img/hackmonkeys.jpg')} />
                            <Image style={styles.img2} source={require('../../assets/img/hackmonkeys.jpg')} />

                        </ScrollView>
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
        fontFamily: 'open-sans-bold',
        textTransform: 'uppercase'
    },
    text: {
        color: colores.letras,
        fontSize: textos.subtitulo,
        textAlign: textos.alignTexto,
        fontFamily: 'open-sans',
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
        height: 345,
        borderRadius: 30,
    },
    imgContainer2: {
        marginTop: 12,
        maxWidth:300,
        width:'100%',
        height:440
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    img2: {
        width: 300,
        height: 345,
        borderRadius: 30,
    },
});
export default HomePage;