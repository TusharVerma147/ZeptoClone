import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';
import AppHeader from '../../components/appHeader';
import {Icons} from '../../assets';
import CustomButton from '../../components/customButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} from '../../redux/CartSlice';
import styles from './styles';

const width = Dimensions.get('window').width;

const Cart = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = item => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = item => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item));
    } else {
      dispatch(removeProduct(item));
    }
  };

  const renderCartItem = ({item}) => (
    <View style={styles.cartItem}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{uri: item.image}} style={styles.cartItemImage} />
        <View>
          <Text style={styles.cartItemName}>{item.name}</Text>
          <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
          <Text style={styles.cartItemQuantity}>{item.grams}g</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
        <View style={styles.removecart}>
          <TouchableOpacity onPress={() => handleDecrement(item)}>
            <Text style={styles.removecarttext}>-</Text>
          </TouchableOpacity>
          <Text style={styles.removecarttext}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleIncrement(item)}>
            <Text style={styles.removecarttext}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.cartItemPrice}>
          ₹{item.discounted * item.quantity}
        </Text>
      </View>
    </View>
  );

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.discounted * item.quantity;
  }, 0);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <AppHeader title="Your Cart" />

      <View>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={item => item.id.toString()}
            style={styles.flat}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptycart}>
            <Image source={Icons.bagempt} style={styles.bagempt} />
            <Text style={styles.emptytext}>Your cart is empty</Text>
            <CustomButton
              backgroundColor={colors.black}
              title="Browse Products"
              textColor={colors.white}
              borderRadius={10}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        )}
      </View>

      {cartItems.length > 0 && (
        <View style={styles.footerview}>
          <View>
            <Text style={styles.topay}>To Pay</Text>
            <Text style={styles.total}>₹{totalAmount}</Text>
          </View>
          <TouchableOpacity
            style={styles.footer}
            onPress={() => navigation.navigate('Payment', {totalAmount})}>
            <Text style={styles.footertext}>Click to Pay</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Cart;

