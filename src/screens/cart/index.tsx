import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';
import AppHeader from '../../components/appHeader';
import {Icons, Images} from '../../assets';
import CustomButton from '../../components/customButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  clearCart,
} from '../../redux/CartSlice';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import Toast from 'react-native-simple-toast';
import RazorpayCheckout from 'react-native-razorpay';
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
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [discountedAmount, setDiscountedAmount] = useState(0);

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

  const gotoHome = () => {
    navigation.navigate('BottomTab', {screen: 'Home'});
  };

  const gotoPayment = () => {
    navigation.navigate('Payment', {totalAmount});
  };
  let razorpayKeyId = 'rzp_test_GnpMgYfbVsmYuV';
  let razorpayKeySecret = 'v2s6xqeaeW8kjNFBGq1wCLmT';
  const handlePayment = () => {
    const options = {
      description: 'Payment for your order',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: razorpayKeyId,
      amount: finalAmount * 100,
      name: 'Zepto',
      prefill: {
        email: 'xyz@example.com',
        contact: '9191919191',
        name: 'Customer',
      },
      theme: {color: '#53a20e'},
    };

    RazorpayCheckout.open(options)
      .then((data: any) => {
        dispatch(clearCart());
        Toast.showWithGravity('Payment Succesfull', Toast.SHORT, Toast.BOTTOM, {
          backgroundColor: colors.reddish,
        });
        Alert.alert('Success', `Payment ID: ${data.razorpay_payment_id}`);
        navigation.navigate('BottomTab', {screen: 'Home'});
      })
      .catch((error: any) => {
        Toast.showWithGravity('Payment Declined', Toast.SHORT, Toast.BOTTOM, {
          backgroundColor: colors.reddish,
        });
      });
  };
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.discounted * item.quantity;
  }, 0);
  const handleApplyCoupon = () => {
    if (!isCouponApplied) {
      const discount = totalAmount * 0.1;
      setDiscountedAmount(discount);
      setIsCouponApplied(true);
    }
  };

  const handleRemoveCoupon = () => {
    setDiscountedAmount(0);
    setIsCouponApplied(false);
  };

  const finalAmount = totalAmount - discountedAmount;

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

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <AppHeader title="Your Cart" />

      <View>
        {cartItems.length > 0 ? (
          <>
            <View style={styles.couponview}>
              {isCouponApplied ? (
                <>
                  <Image source={Icons.discount} />

                  <Text style={styles.couontext}>Coupon applied: ZEP10</Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleRemoveCoupon}>
                    <Text style={styles.couponcode}>REMOVE</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Image source={Icons.discount} />

                  <Text style={styles.couontext}>You have a new Coupon</Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleApplyCoupon}>
                    <Text style={styles.couponcode}>ZEP10</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
            <FlatList
              data={cartItems}
              renderItem={renderCartItem}
              keyExtractor={item => item.id.toString()}
              style={styles.flat}
              showsVerticalScrollIndicator={false}
            />
          </>
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
            <Text style={styles.total}>₹{finalAmount}</Text>
          </View>
          <TouchableOpacity style={styles.footer} onPress={handlePayment}>
            <Text style={styles.footertext}>Proceed to Pay</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Cart;
