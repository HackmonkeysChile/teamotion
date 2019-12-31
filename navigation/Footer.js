import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SeleccionarEmocionScreen from '../screens/SeleccionarEmocionScreen';
import SeleccionarTareasScreen from '../screens/SeleccionarTareasScreen';
import ComenzarDaily from '../screens/ComenzarDaily';
import PerfilScreen from '../screens/PerfilScreen';
import TareasScreen from '../screens/TareasScreen';

const nav = createStackNavigator({
    Comenzar: ComenzarDaily,
    Emocion: SeleccionarEmocionScreen,
    Tareas: SeleccionarTareasScreen
});

const tabNav = createBottomTabNavigator({
    Perfil: PerfilScreen,
    Tareas: TareasScreen
});


const Footer = createAppContainer(nav);
export default Footer;