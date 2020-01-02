import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ComenzarDaily from './ComenzarDaily';

const HomePage = props => {
    return (
        <View style={styles.screen}>
            <Text>HOME Screen!</Text>
            <Button
                title="Comenzar"
                style={styles.button}
                onPress={() => props.navigation.navigate('')
                }
            />
        </View>

    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default HomePage;