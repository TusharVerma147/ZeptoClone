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

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  separate: {
    width: 10,
  },
  flat: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  renderproduct: {
    backgroundColor: colors.white,
    height: width / 2,
    width: width / 3.3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 6},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  itemimage: {
    flex: 0.5,
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor: colors.white,
  },
  name: {
    flex: 0.4,
    paddingHorizontal: 10,
  },
  subrender: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  des: {
    fontSize: 15,
    fontWeight: '400',
  },
  strikethroughText: {
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: colors.darkgrey,
  },
  price: {
    fontSize: 15,
    color: colors.violet,
    fontWeight: '500',
  },
  account: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: colors.violet,
  },
  cart: {
    // backgroundColor:'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 10,
    // marginVertical:20,
    paddingVertical: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.pink,
  },
  carttext: {
    color: colors.pink,
    fontWeight: '800',
    fontSize: 16,
  },
  removecart: {
    // justifyContent: 'space-between',
    flexDirection: 'row',
    // paddingHorizontal: 5,
    // marginVertical:20,
    paddingVertical: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.pink,
    backgroundColor: colors.pink,
  },
  removecarttext: {
    color: colors.white,
    fontWeight: '800',
    marginHorizontal: 5,
    fontSize: 16,
  },
});
export default ProductList;
