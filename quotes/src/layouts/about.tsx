import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { globalStyle } from '../styles/style';

type AboutProps = {
    navigation: any;
};

export default function About({ navigation }: AboutProps) {
    const loadScene = () => {
        navigation.navigate('Quotes');
    };

    return (
        <View style={globalStyle.main}>
            <TouchableOpacity style={globalStyle.button} onPress={loadScene}>
                <Text style={globalStyle.whiteText}>Котировки</Text>
            </TouchableOpacity>
        </View>
    );
}
