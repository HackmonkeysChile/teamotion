import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import Colores from '../constants/colores';
import { Tareas } from '../data/datosEstaticos';


const renderGrid = (itemData) => {
    return (
        <View style={styles.gridData}>
            <Text>{itemData.item.descripcion}</Text>
            <Text>{itemData.item.colaborador.nombre}</Text>
        </View>
    );
};
const SeleccionarTareasScreen = props => {

    return (
        <View style={styles.screen}>
            <FlatList
                numColumns={3}
                data={Tareas}
                renderItem={renderGrid}
            />
            <Text>¿?</Text>
            <View style={styles.buttonView}>
                <Button
                    title="Siguiente >"
                    style={styles.button}
                    color={Colores.secundario}
                    onPress={() => {
                        props.navigation.navigate('Home')
                    }}
                />

            </View>
        </View>
    )
};

SeleccionarTareasScreen.navigationOptions = {
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
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 45
    }
});

export default SeleccionarTareasScreen;