import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList
} from 'react-native';

import Colores from '../constants/colores';
import { Emocion } from '../data/datosEstaticos';

const renderGrid = (itemData) => {
    return (
        <View style={styles.gridData}>
            <Text>{itemData.item.nombre}</Text>
        </View>
    );
};

const SeleccionarEmocionScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.titulo}>¿Cómo te sientes?</Text>

            <FlatList
                numColumns={3}
                data={Emocion}
                renderItem={renderGrid}
            />

            <View style={styles.buttonView}>
                <Button
                    title="< Cancelar"
                    style={styles.button}
                    color={Colores.cancelar}
                    onPress={() => {
                        props.navigation.popToTop()
                    }} />
                <Button
                    title="Siguiente >"
                    style={styles.button}
                    color={Colores.secundario}
                    onPress={() => {
                        props.navigation.navigate('TareasSeleccionar')
                    }} />

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
        width: '49%'
    },
    titulo:{
        marginTop:30
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom:45

    },
    gridData:{
        margin:15,
        height:150,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default SeleccionarEmocionScreen;