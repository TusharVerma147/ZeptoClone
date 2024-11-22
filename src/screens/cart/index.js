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

const width = Dimensions.get('window').width;

const Cart = ({navigation}) => {
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
      <View style={{flexDirection: 'row', alignItems:'center'}}>
        <Image source={{uri: item.image}} style={styles.cartItemImage} />
        <View>
          <Text style={styles.cartItemName}>{item.name}</Text>
          <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
          <Text style={styles.cartItemQuantity}>{item.grams}g</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row',gap:20, alignItems:'center'}}>
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
      <AppHeader title="Your Cart" alignment="auto" />

      <View style={styles.content}>
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
        <View>
          <Text>tushar</Text>
        </View>
      </View>

      {cartItems.length > 0 && (
        <View style={styles.footerview}>
          
          
          <View>
            <Text style={styles.topay}>To Pay</Text>
            <Text style={styles.total}>₹{totalAmount}</Text>
          </View>
          <TouchableOpacity style={styles.footer}>
            {/* <Image source={Icons.bag} style={styles.clock} /> */}
            <Text style={styles.footertext}>Click to Pay</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyish,
  },
  content: {
    flex: 1,   
    paddingHorizontal: 20,
    paddingBottom: 100,
    marginBottom: 30,
    marginTop: 10,
  },
  flat: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  emptycart: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: width / 10,
  },
  bagempt: {
    height: width / 4,
    width: width / 4,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  emptytext: {
    color: colors.black,
    fontSize: 20,
    margin: 10,
    fontWeight: '700',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: colors.white,
    justifyContent:'space-between'
  },
  cartItemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  cartItemQuantity: {
    fontSize: 14,
    color: colors.darkgrey,
  },
  cartItemPrice: {
    fontSize: 16,
    color: colors.violet,
    fontWeight: '700',
  },
  removecart: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.lightpink,
    backgroundColor: colors.lightpink,
  },
  removecarttext: {
    color: colors.pink,
    fontWeight: '800',
    marginHorizontal: 5,
    fontSize: 16,
  },
  footerview: {
    position: 'absolute',
    alignItems:'center',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
     flexDirection:'row',
    paddingTop: 10,
    justifyContent: 'space-evenly',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pink,
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: 'row',
    marginVertical: 20,
   paddingHorizontal:50
  },
  footertext: {
    color: colors.white,
    fontSize: 25,
    fontWeight: '700',
  },
  topay:{
    color:colors.darkgrey,
    fontSize:15
  },
  total:{
    color:colors.black,
    fontSize:25,
    fontWeight:'bold'
  }
});
