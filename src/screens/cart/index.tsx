import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
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
import { StackNavigationProp } from '@react-navigation/stack';
// import RazorpayCheckout from 'react-native-razorpay';
type NavigationProp = StackNavigationProp<any>;


interface CartItem {
  id: string;
  name: string;
  image: string;
  grams: number;
  discounted: number;
  quantity: number;
}


interface RootState {
  cart: CartItem[];
}

const Cart = () => {
  const navigation = useNavigation<NavigationProp>();
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();





  
  const handleIncrement = (item: CartItem) => {
    dispatch(incrementQuantity(item));    
  };


  const handleDecrement = (item: CartItem) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item));
    } else {
      dispatch(removeProduct(item));
    }
  };

  const gotoHome =()=>{
    navigation.navigate('BottomTab',{screen:'Home'})
  }

  const gotoPayment =()=>{
    navigation.navigate('Payment', {totalAmount})
  }

  
  const renderCartItem = ({item}: {item: CartItem}) => (
    <View style={styles.cartItem}>
      <View style={styles.mainview}>
        <Image source={{uri: item.image}} style={styles.cartItemImage} />
        <View>
          <Text style={styles.cartItemName}>{item.name}</Text>
          <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
          <Text style={styles.cartItemQuantity}>{item.grams}g</Text>
        </View>
      </View>
      <View style={styles.itemview}>
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
            keyExtractor={(item) => item.id.toString()}
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
              onPress={gotoHome}
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
            onPress={gotoHome}>
            <Text style={styles.footertext}>Proceed to Pay</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Cart;
