import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Order from './screens/Order';
import Shop from './screens/Shop';
import Cart from './screens/Cart';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Shop') {
            iconName = 'shopping-bag';
          } else if (route.name === 'Order') {
            iconName = 'list-ul';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          }
          return <Icon name={iconName} color={color} size={20} />;
        },
        tabBarLabel: ({color, size}) => (
          <View style={{marginBottom: 2}}>
            <Text style={{fontSize: 12}}> {route.name}</Text>
          </View>
        ),
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default Navigation;

//const styles = StyleSheet.create({});
