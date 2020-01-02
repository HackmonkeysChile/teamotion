import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SeleccionarEmocionScreen from '../screens/SeleccionarEmocionScreen';
import HomePage from '../screens/HomePage';
import PerfilScreen from '../screens/PerfilScreen';
import TareasScreen from '../screens/TareasScreen';
import React from "react";



const nav = createStackNavigator({
    HomePage: HomePage,
    PerfilScreen: PerfilScreen
});

const tabNav = createBottomTabNavigator({
        Perfil: PerfilScreen,
        Home: {
            screen: nav,
            navigationOptions: {
                tabBarLabel: ({navigation}) => {
                }
            }

        },
        Emocion: {
            screen: SeleccionarEmocionScreen,
            navigationOptions: {
                tabBarVisible: false
            }
        },
        Tareas: TareasScreen
    },
    {
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
    });


const Footer = createAppContainer(tabNav);
export default Footer;