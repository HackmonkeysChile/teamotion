import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';

import SeleccionarEmocionScreen from '../screens/SeleccionarEmocionScreen';
import SeleccionarTareaScreen from '../screens/SeleccionarTareasScreen';
import HomePages from '../screens/HomePage';
import PerfilScreen from '../screens/PerfilScreen';
import TareasScreen from '../screens/TareasScreen';

import React from "react";
import { View } from "react-native";
import colores from '../constants/colores';

const HomeStack = createStackNavigator({
    HomePage: {
        screen: HomePages,
        navigationOptions: {
            header: null
        }
    }
});

const TareasHome = createStackNavigator({
    HomePage: {
        screen: HomePages,
        navigationOptions: {
            header: null
        }
    },
    TareasScreen: TareasScreen
});

const EmocionSelect = createStackNavigator({
    SeleccionarEmocionScreen: {
        screen: SeleccionarEmocionScreen,
        navigationOptions: { header: null }
    },
    HomePage: {
        screen: HomeStack,
        navigationOptions: {
            header: null
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'rgba(255,255,255,0.8)',
        activeBackgroundColor: colores.primario,
        inactiveBackgroundColor: colores.primario,
    }
});

const MiPerfil = createMaterialTopTabNavigator({
    Perfil: PerfilScreen,
    TareasScreen: TareasScreen
});

const tabNav = createBottomTabNavigator({
    Home: HomeStack,
    Daily: {
        screen: EmocionSelect,
        navigationOptions: {
            tabBarVisible: false,
            tabBarIcon: ({ tintColor }) => (
                <View
                    style={{
                        position: 'absolute',
                        bottom: -10, // space from bottombar
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
    miPerfil: {
        screen: MiPerfil,
        navigationOptions: {
            tabBarLabel: 'Mi Perfil'
        }
    },

}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'rgba(255,255,255,0.8)',
        activeBackgroundColor: colores.primario,
        inactiveBackgroundColor: colores.primario,
    }
});

const NavEjemplo = createAppContainer(tabNav);
export default NavEjemplo;