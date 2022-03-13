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
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import Notify from '../components/Notify';
import {clearSuccessOrderStatus} from '../redux/actions';

const Order = () => {
  const [notify, setNotify] = useState(false);
  const dispatch = useDispatch();
  let orderHistory = useSelector(state => state.taskReducer.orderHistory);

  let isSuccessfulOrder = useSelector(
    state => state.taskReducer.successfulOrder,
  );
  useEffect(() => {
    if (isSuccessfulOrder) {
      setNotify(true);
      setTimeout(() => {
        setNotify(false);
      }, 3000);
      dispatch(clearSuccessOrderStatus());
    }
    // return () => {
    //   setNotify(false);
    // };
  });
  const renderItem = ({item}) => {
    return (
      <View style={{padding: 10}}>
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
              }}>
              Order ID
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
              }}>
              Order Amount
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
              }}>
              Order Date
            </Text>
          </View>
          <View>
            <Text>{item.orderId}</Text>
            <Text>{`Rs. ${item.totalMoney}`}</Text>
            <Text>{item.date}</Text>
          </View>
        </View>
        {item.products.map((product, index1) => {
          return (
            <View
              key={product.id}
              style={{
                marginBottom: 30,
                flexDirection: 'row',
                padding: 10,
                flex: 1,
              }}>
              <Image
                source={{uri: product.image}}
                style={{width: 100, height: 100}}
              />
              <View style={{padding: 10, width: '80%'}}>
                <Text>{product.title}</Text>

                <Text style={{fontSize: 15, fontWeight: '700'}}>{`${
                  product.price
                } * ${product.quantity} = ${(
                  product.price * product.quantity
                ).toFixed(2)}`}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginRight: '15%',
                  }}></View>
              </View>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View>
      {orderHistory.length !== 0 ? (
        <>
          {notify && <Notify message="Order placed Successfully" />}
          <FlatList
            data={orderHistory}
            renderItem={renderItem}
            keyExtractor={item => item.orderId}
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
          <Text style={{fontSize: 20}}>You haven't placed any order yet!</Text>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
