import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import AddRemoveCartCounter from '../components/AddRemoveCartCounter';
import {placeOrder} from '../redux/actions';
const Cart = ({navigation}) => {
  let cartData = useSelector(state => state.taskReducer.cartData);

  const dispatch = useDispatch();
  const totalMoney =
    cartData !== undefined &&
    cartData
      .reduce((acc, curr, index, arr) => {
        return acc + parseFloat(curr.price * curr.quantity);
      }, 0.0)
      .toFixed(2);
  const handleOrder = (cartData, totalMoney) => {
    let obj = {
      cartData,
      totalMoney,
      orderId: new Date().getTime().toString(),
      date: new Date().toLocaleString('en-IN', {hour12: true}),
    };
    dispatch(placeOrder(obj));
    navigation.navigate('Order');
    //navigate('/order');
  };
  const renderItem = ({item}) => {
    let newData = cartData.filter((data, index) => {
      return data.id === item.id;
    });
    return (
      <View
        style={{
          marginBottom: 30,
          flexDirection: 'row',
          padding: 10,
          flex: 1,
        }}>
        <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
        <View style={{padding: 10, width: '80%'}}>
          <Text>{item.title}</Text>
          {/* <Text style={{fontWeight: '700'}}>{`Rs. ${item.price}`}</Text> */}
          <Text style={{fontSize: 15, fontWeight: '700'}}>{`${item.price} * ${
            item.quantity
          } = ${(item.price * item.quantity).toFixed(2)}`}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: '15%',
            }}>
            {/* <Button color="black" title="Add to Cart" /> */}
            <AddRemoveCartCounter item={item} newData={newData} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {cartData.length !== 0 ? (
        <>
          <FlatList
            data={cartData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
              }}>{`Cart Total : Rs ${totalMoney}`}</Text>
          </View>
          <Button
            title="Place Order"
            onPress={() => handleOrder(cartData, totalMoney)}
          />
        </>
      ) : (
        <View
          style={{
            marginVertical: '60%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text style={{fontSize: 20}}>Your cart is empty!</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
