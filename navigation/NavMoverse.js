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



const NavMoverse = createAppContainer(tabNav);
export default NavMoverse;