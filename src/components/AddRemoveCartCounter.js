import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {addToCart, removeFromCart} from '../redux/actions';
import {useDispatch} from 'react-redux';

const AddRemoveCartCounter = ({item, newData}) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
      }}>
      <View style={{marginRight: 5, width: '15%'}}>
        <Button
          color="black"
          title="-"
          onPress={() => dispatch(removeFromCart(item))}
        />
      </View>
      <View>
        <Text style={{fontWeight: '700', fontSize: 17}}>
          {newData.length > 0 && newData[0].quantity}
        </Text>
      </View>

      <View style={{marginLeft: 5, width: '15%'}}>
        <Button
          color="black"
          title="+"
          onPress={() => dispatch(addToCart(item))}
        />
      </View>
    </View>
  );
};

export default AddRemoveCartCounter;

const styles = StyleSheet.create({});
