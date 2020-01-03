import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';

import SeleccionarTareaScreen from '../screens/SeleccionarTareasScreen';
import HomePages from '../screens/HomePage';

import React from "react";
import { View } from "react-native";
import colores from '../constants/colores';

const volverTab = createBottomTabNavigator({
    Salir: {
        screen: HomePages,
        navigationOptions: {
            tabBarVisible: false,
            tabBarIcon: ({ tintColor }) => (
                <View
                    style={{
                        position: 'absolute',
                        alignItems: 'center',
                        bottom: -10,
                        position: 'absolute',
                        // space from bottombar
                        height: 90,
                        width: 90,
                        borderRadius: 58,
                        backgroundColor: colores.primario,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <FontAwesome
                        name="plus"
                        size={45}
                        color={tintColor}
                        style={{
                            alignContent: 'center'
                        }}
                    />
                </View>
            ),
        },
    },
    Seguir: {
        screen: SeleccionarTareaScreen,
        navigationOptions: {
            tabBarLabel: 'Siguiente'
        }
    },

}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'rgba(255,255,255,0.7)',
        activeBackgroundColor: colores.primario,
        inactiveBackgroundColor: colores.primario,
        style:{
            borderTopColor: colores.secundario,
            height:65,
            borderTopWidth:15
        },
        labelStyle:{
            fontSize:12
        }
    }
});

const NavMoverse = createAppContainer(volverTab);
export default NavMoverse;