import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList, TouchableHighlight
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//md-happy superhappy
//md-sad supersad
import { MaterialCommunityIcons } from '@expo/vector-icons';
//emoticon-happy
//emoticon-sad
import { FontAwesome } from '@expo/vector-icons';


import Colores from '../constants/colores';
import { Emocion } from '../data/datosEstaticos';
import colores from '../constants/colores';

const renderGrid = (itemData) => {
    return (
        <View style={styles.gridData}>
            <Ionicons
                name="md-happy"
                size={50}
                style={{
                    alignContent: 'center'
                }}
            />
            <Text>{itemData.item.nombre}</Text>

        </View>
    );
};
const iconito = () => {
    return (
        <FontAwesome name="check"
            size={35}
            color={'white'}
            style={{
                alignContent: 'center'
            }} />
    );
};
const SeleccionarEmocionScreen = props => {
    console.log(iconito);
    return (
        <View style={styles.screen}>
            <Text style={styles.titulo}>¿Cómo te sientes?</Text>

            <FlatList
                data={Emocion}
                horizontal={true}
                renderItem={renderGrid}
            />
            <Button title="dfjksn" onPress={() => { props.navigation.navigate('HomePage') }} />
            <View style={styles.footer}>
            </View>
            <View style={styles.footer2}>
                <TouchableHighlight onPress={() => {
                    props.navigation.navigate('HomePage')
                }} >
                    <View style={styles.buttonView}>
                        <FontAwesome name="check"
                            size={35}
                            color={'white'}
                            style={{
                                alignContent: 'center'
                            }} />

                    </View>
                </TouchableHighlight>
            </View>


        </View>
    )

};

SeleccionarEmocionScreen.navigationOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colores.primario : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colores.primario
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '49%',
    },
    titulo: {
        marginTop: 50
    },
    buttonView: {
        position: 'absolute',
        bottom: -20, // space from bottombar
        left: '75%',
        height: 55,
        width: 55,
        borderRadius: 58,
        backgroundColor: '#04D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridData: {
        margin: 15,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: colores.secundario,
        height: 64,
        width: '100%'
    }
    ,
    footer2: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: colores.primario,
        height: 49.5,
        width: '100%'
    }

});

export default SeleccionarEmocionScreen;