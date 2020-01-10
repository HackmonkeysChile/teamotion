import { createAppContainer, createSwitchNavigator, NavigationRoute  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';

import SeleccionarEmocionScreen from '../screens/SeleccionarEmocionScreen';
import HomePages from '../screens/HomePage';
import PerfilScreen from '../screens/PerfilScreen';
import TareasScreen from '../screens/TareasScreen';
import AutenticacionScreen from '../screens/AutenticacionScreen';

import HomePageLider from '../screens/lider/HomePage';
import PerfilScreenLider from '../screens/lider/PerfilScreen';
import TareasScreenLider from '../screens/lider/TareasScreen';
import EquiposScreen from '../screens/lider/EquiposScreen';

import React from 'react';
import { View, TouchableOpacity } from "react-native";

import colores from '../constants/colores';

const AutenticarStack = createStackNavigator({
    Autenticar:{
        screen: AutenticacionScreen,
        navigationOptions: {
            header: null
        }
    }
});

//LIDER
const HomeStackLider = createStackNavigator({
    HomePageLider: {
        screen: HomePageLider,
        navigationOptions: {
            header: null
        }
    },
    Autenticar2: AutenticacionScreen
});

const PerfilTopTabLider = createMaterialTopTabNavigator({
    PerfilScreenLider: PerfilScreenLider,
    Team: {
        screen: TareasScreenLider,
        navigationOptions: {
            tabBarLabel: 'Metas'
        }
    }
}, {
    tabBarOptions: {
        style: {
            backgroundColor: colores.secundario,
            paddingTop: 25
        },
        labelStyle: {
            color: colores.letras,
            fontWeight: 'bold',
        },
        indicatorStyle: {
            backgroundColor: colores.letras
        }
    }
});

const tabNavLider = createBottomTabNavigator({
    Home: HomeStackLider,
    Equipos: {
        screen: EquiposScreen,
        navigationOptions: {
            tabBarVisible: false,
            tabBarIcon: 
            <TouchableOpacity
            onPress={()=> {}}
            style={{
                position: 'absolute',
                bottom: -8,
                height:80,
                width: 80,
                borderRadius: 58,
                backgroundColor: colores.primario,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <FontAwesome
                name="plus"
                size={45}
                color={'white'}
                style={{
                    alignContent: 'center'
                }}
            />
        </TouchableOpacity>
        },
    },
    miPerfil: {
        screen: PerfilTopTabLider,
        navigationOptions: {
            tabBarLabel: 'Mi Perfil'
        }
    },

}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'rgba(255,255,255,0.7)',
        activeBackgroundColor: colores.primario,
        inactiveBackgroundColor: colores.primario,
        style: {
            borderTopColor: colores.secundario,
            height: 65,
            borderTopWidth: 15,
            borderBottomColor: colores.primario,
            borderBottomWidth: 0
        },
        labelStyle: {
            fontSize: 12,
            marginBottom: 6
        }
    }
});

//COLABORADOR
const HomeStack = createStackNavigator({
    HomePage: {
        screen: HomePages,
        navigationOptions: {
            header: null
        }
    }
});

const EmocionSelect = createStackNavigator({
    SeleccionarEmocionScreen: {
        screen: SeleccionarEmocionScreen,
        navigationOptions: { header: null }
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
    Metas: {
        screen: TareasScreen,
        navigationOptions: {
            tabBarLabel: 'Mis Metas'
        }
    }
}, {
    tabBarOptions: {
        style: {
            backgroundColor: colores.secundario,
            paddingTop: 25
        },
        labelStyle: {
            color: colores.letras,
            fontWeight: 'bold',
        },
        indicatorStyle: {
            backgroundColor: colores.letras
        }
    }
});

const tabNav = createBottomTabNavigator({
    Home: HomeStack,
    Daily: {
        screen: EmocionSelect,
        navigationOptions: {
            tabBarVisible: false,
            tabBarIcon: 
            <TouchableOpacity
            onPress={()=> {}}
            style={{
                position: 'absolute',
                bottom: -8,
                height:80,
                width: 80,
                borderRadius: 58,
                backgroundColor: colores.primario,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <FontAwesome
                name="plus"
                size={45}
                color={'white'}
                style={{
                    alignContent: 'center'
                }}
            />
        </TouchableOpacity>
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
        inactiveTintColor: 'rgba(255,255,255,0.7)',
        activeBackgroundColor: colores.primario,
        inactiveBackgroundColor: colores.primario,
        style: {
            borderTopColor: colores.secundario,
            height: 65,
            borderTopWidth: 15,
            borderBottomColor: colores.primario,
            borderBottomWidth: 0
        },
        labelStyle: {
            fontSize: 12,
            marginBottom: 6
        }
    }
});


const mainNav = createSwitchNavigator({
    Login: AutenticarStack,
    Menu:tabNav,
    MenuLider: tabNavLider
});

const NavColaborador = createAppContainer(mainNav);
export default NavColaborador;