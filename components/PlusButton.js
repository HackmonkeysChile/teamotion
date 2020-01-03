import React, { Component } from 'react';
import { Animated, TouchableHighlight, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import colores from '../constants/colores';
import { BottomTabBar } from 'react-navigation-tabs';

const SIZE = 80;

const PlusButton = props => {
    return (
        <View
            style={{
                position: 'absolute',
                alignItems: 'center',
                bottom: -10,
                position: 'absolute',
                // space from bottombar
                height: SIZE,
                width: SIZE,
                borderRadius: 58,
                backgroundColor: colores.primario,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            
        </View >
    )
};

export { PlusButton };