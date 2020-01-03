import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PerfilScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Perfil Screen!</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer:{
        position: 'absolute',
        bottom: 0,
        backgroundColor:'#FFED70',
        height: 15,
        width:'100%'
      }
});

export default PerfilScreen;