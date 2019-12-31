import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';

import Colores from '../constants/colores';


const ComenzarDaily = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <Text style={styles.text}>Ingresar emocion</Text>
                <View style={styles.buttonView}>
                    <Button
                        title="Comenzar"
                        style={styles.button}
                        color={Colores.secundario}
                        onPress={() => props.navigation.navigate('Emocion')
                        } />
                </View>
            </View>
        </View>
    )
};

ComenzarDaily.navigationOptions = {
    headerTitle: 'Emocion',
    headerStyle: {
        backgroundColor: Platform.OS==='android'?Colores.primario:''
    },
    headerTintColor: Platform.OS==='android'?'white':Colores.primario
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.26,
        backgroundColor: '#ffffff',
        elevation: 4,
        padding: 25,
        borderRadius: 6
    },
    buttonView: {
        width: '90%',
    },
    button: {
        color: 'white'
    },
    text: {
        marginBottom: 5
    }
});

export default ComenzarDaily;