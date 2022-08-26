import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>POLONIEX</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
        backgroundColor: '#1f2f40',
    },
    text: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
    },
});
