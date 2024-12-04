import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import {Icons} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProduct,
  removeProduct,
  decrementQuantity,
  incrementQuantity,
} from '../../redux/CartSlice';
import styles from './styles';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProductList = ({data}) => {
  const navigation = useNavigation();

  const gotoDetail = item => {
    navigation.navigate('Details', {item});
  };
  const dispatch = useDispatch();
  const cartStore = useSelector(state => state.cart);


  const renderProducts = ({item, index}) => {
    

    const isAddedToCart = cartStore.find(grocery => grocery.id === item.id);
    
    const handleAddToCart = () => {
      dispatch(addProduct(item));
    };

    const handleIncrement = () => {
      dispatch(incrementQuantity(item));
    };

    const handleDecrement = () => {
      dispatch(decrementQuantity(item));
    };





    return (
      <TouchableOpacity
        style={styles.renderproduct}
        onPress={() => gotoDetail(item)}>
        <Image source={{uri: item.image}} style={styles.itemimage} />
        <View style={styles.name}>
          <Text numberOfLines={1} style={styles.des}>
            {item.name}
          </Text>
          <Text style={styles.des}>{item.grams}g</Text>
          <View style={styles.subrender}>
            <View>
              <Text style={styles.strikethroughText}>₹{item.price}</Text>
              <Text style={styles.price}>₹{item.discounted}</Text>
            </View>
            {!isAddedToCart ? (
              <TouchableOpacity style={styles.cart} onPress={handleAddToCart}>
                <Text style={styles.carttext}>Add</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.removecart}>
                <Text style={styles.removecarttext} onPress={handleDecrement}>-</Text>
                <Text style={styles.removecarttext}>{isAddedToCart.quantity}</Text>
                <Text style={styles.removecarttext} onPress={handleIncrement}>+</Text>
              </View>
            )}
          
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flat}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separate}></View>}
        data={data}
        renderItem={renderProducts}
      />
    </View>
  );
};

export default ProductList;
