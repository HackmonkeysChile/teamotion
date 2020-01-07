import React, { Component, useState } from 'react';
import { TouchableOpacity, Modal } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import colores from '../constants/colores';


const PlusButton = props => {
    return (
        <TouchableOpacity
            onPress={()=> {}}
            style={{
                position: 'absolute',
                bottom: -13,
                height:85,
                width: 85,
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
    )
};

export default PlusButton;