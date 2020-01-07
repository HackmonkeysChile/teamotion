import colores from '../constants/colores';
import textos from '../constants/textos';

import { View, Text, ScrollView, Image, Animated, Easing } from 'react-native';
import { Emocion } from '../data/datosEstaticos';
import { Component } from 'react';


class Emocion extends Component{
    constructor(props){
        super(props)
        this.animatedValue=new Animated.Value(0)
    }

    handleAnimation = () => {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease
        }).start()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={this.handleAnimation}>
                    <Text>Transform</Text>
                </TouchableOpacity>
                <Animated.Image
                    source={require('../assets/hackm')}
                    resizeMode='cover'
                    style={{
                        position: 'absolute',
                        left: 40,
                        top: 100,
                        height: 20,
                        width: 20,
                        transform: [
                            {
                                translateX: this.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 120]
                                })
                            },
                            {
                                translateY: this.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 25]
                                })
                            },
                            {
                                scaleX: this.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 15]
                                })
                            },
                            {
                                scaleY: this.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 12.5]
                                })
                            }
                        ]
                    }}
                />
            </View>
        )
    }
}


export default Emocion;