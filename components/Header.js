import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
        height:20,
        paddingTop:25,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tituloHeader: {
        color:'white'
    }
});

export default Header;
