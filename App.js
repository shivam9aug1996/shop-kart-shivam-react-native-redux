import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
