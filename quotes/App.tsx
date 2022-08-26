/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Header from './src/components/Header';
import Navigate from './navigate';
import configureStore from './src/store/store';

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <View style={{ height: '100%' }}>
                <Header />
                <Navigate />
            </View>
        </Provider>
    );
};

export default App;
