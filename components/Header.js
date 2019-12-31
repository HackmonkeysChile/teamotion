import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colores from '../constants/colores';
import Titulos from '../components/Titulos';

const Header = props => {
    return (
        <View style={styles.header}>
            <Titulos style={styles.tituloHeader}>{props.title}</Titulos>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height:90,
        paddingTop:25,
        backgroundColor:Colores.primario,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tituloHeader: {
        color:'white'
    }
});

export default Header;
