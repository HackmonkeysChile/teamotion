import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';

import SeleccionarEmocionScreen from '../screens/SeleccionarEmocionScreen';
import HomePage from '../screens/HomePage';
import PerfilScreen from '../screens/PerfilScreen';
import TareasScreen from '../screens/TareasScreen';

import React from "react";
import { View, TouchableHighlight, } from "react-native";
import colores from '../constants/colores';

const nav = createStackNavigator({
    Emocion: SeleccionarEmocionScreen,
    HomePage: {
        
    },
    PerfilScreen: PerfilScreen,
    
});

const tabNav = createBottomTabNavigator({
    Perfil: PerfilScreen,
    Emocion: {
        screen: nav,
        navigationOptions: {
            
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
    Tareas: TareasScreen
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'rgba(255,255,255,0.8)',
        activeBackgroundColor: colores.primario,
        inactiveBackgroundColor: colores.primario,

    }
}
    /*{
        initialRouteName: "Home",
        defaultNavigationOptions: ({navigation}) =>
            ({
            tabBarOnPress: ({ navigation, defaultHandler }) =>
            {
                 if (navigation.state.routeName === "Home") {
                    return null;
                }
                 defaultHandler();
            }
        })
    }*/
);

const NavContribuidor = createAppContainer(tabNav);
export default NavContribuidor;