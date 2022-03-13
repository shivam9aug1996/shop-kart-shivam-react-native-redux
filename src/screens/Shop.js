import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {products} from '../data/data';
import AddRemoveCartCounter from '../components/AddRemoveCartCounter';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/actions';
const Shop = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    setTimeout(() => {
      setData(products);
    }, 700);
  };

  useEffect(() => {
    console.log('ghj');
    getData();
  }, []);

  let cartData = useSelector(state => state.taskReducer.cartData);

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
          <Text style={{fontWeight: '700'}}>{`Rs. ${item.price}`}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: '15%',
            }}>
            {newData.length > 0 ? (
              <AddRemoveCartCounter item={item} newData={newData} />
            ) : (
              <Button
                color="black"
                title="Add to Cart"
                onPress={() => dispatch(addToCart(item))}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {data.length === 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({});
