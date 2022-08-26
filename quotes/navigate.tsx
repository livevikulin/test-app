import React from 'react';
import Quotes from './src/layouts/quotes';
import About from './src/layouts/about';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{
                        title: 'О приложении',
                    }}
                />
                <Stack.Screen
                    name="Quotes"
                    component={Quotes}
                    options={{
                        title: 'Котировки',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
