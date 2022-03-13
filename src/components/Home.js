import React from 'react';
import {Image, View} from 'react-native';
import shopkart from '../images/shopkart.png';
const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image source={require('../images/shopkart.png')} />
    </View>
  );
};

export default Main;
