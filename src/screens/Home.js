import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Main from '../components/Home';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Main />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
