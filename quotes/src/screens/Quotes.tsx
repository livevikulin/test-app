import React from 'react';
import { Text, View } from 'react-native';
import { globalStyle } from '../styles/style';

export default function Quotes() {
    return (
        <View style={globalStyle.main}>
            <Text>Котировки</Text>
        </View>
    );
}
