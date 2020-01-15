import { createAppContainer, createSwitchNavigator, NavigationRoute } from 'react-navigation';
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
import CrearTarea from '../screens/lider/CrearTarea';

import React from 'react';
import { View, TouchableOpacity, Image } from "react-native";

import colores from '../constants/colores';
import textos from '../constants/textos';
import Daily from '../models/Daily';

const AutenticarStack = createStackNavigator({
    Autenticar: {
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
    }
});

const PerfilTopTabLider = createMaterialTopTabNavigator({
    Team: {
        screen: TareasScreenLider,
        navigationOptions: {
            tabBarLabel: 'Metas'
        }
    },
    PerfilScreenLider: {
        screen: PerfilScreenLider,
        navigationOptions: {
            tabBarLabel: 'Perfil'
        }
    },


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
            backgroundColor: '#04D9D9'
        }
    }
});

const tabNavLider = createBottomTabNavigator({
    Home: HomeStackLider,
    NuevaTarea: {
        screen: CrearTarea,
        navigationOptions: {
            tabBarLabel: 'Nueva Tarea',
            tabBarVisible: false,
            tabBarIcon:
                <Image style={{
                    height: 50,
                    width: 50,
                    bottom: 10
                }} source={require('../assets/img/icono_team.png')} />
                
        },
    },
    miPerfil: {
        screen: PerfilTopTabLider,
        navigationOptions: {
            tabBarLabel: 'Team'
        }
    },

}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'rgba(255,255,255,0.7)',
        activeBackgroundColor: colores.botones,
        inactiveBackgroundColor: colores.botones,
        style: {
            borderTopColor: colores.secundario,
            height: 70,
            borderTopWidth: 10,
            borderBottomColor: colores.botones,
            borderBottomWidth: 0
        },
        labelStyle: {
            fontSize: 12,
            marginBottom: 10,
            fontFamily: 'open-sans-bold'
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
    Metas: {
        screen: TareasScreen,
        navigationOptions: {
            tabBarLabel: 'Mis Metas'
        }
    },
    Perfil: PerfilScreen,

    
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
            backgroundColor: colores.primario
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
                <Image style={{
                    height: 50,
                    width: 50,
                    bottom: 10
                }} source={require('../assets/img/icono_daily.png')} />
        },

    },
    miPerfil: {
        screen: MiPerfil,
        navigationOptions: {
            tabBarLabel: 'Team'
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
            height: 70,
            borderTopWidth: 10,
            borderBottomColor: colores.primario,
            borderBottomWidth: 0
        },
        labelStyle: {
            fontSize: 12,
            marginBottom: 10,
            fontFamily: 'open-sans-bold'
        }
    }
});


const mainNav = createSwitchNavigator({
    Login: AutenticarStack,
    Menu: tabNav,
    MenuLider: tabNavLider
});

const NavColaborador = createAppContainer(mainNav);
export default NavColaborador;