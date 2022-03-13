import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Notify = ({message}) => {
  return (
    <View style={{padding: 10}}>
      <View style={{borderColor: 'green', borderWidth: 1, padding: 10}}>
        <Text style={{color: 'green'}}>{message}</Text>
      </View>
    </View>
  );
};

export default Notify;

const styles = StyleSheet.create({});
