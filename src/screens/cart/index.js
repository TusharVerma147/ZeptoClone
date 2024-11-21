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
import {useSelector} from 'react-redux';

const width = Dimensions.get('window').width;

const Cart = ({navigation}) => {
  const cartItems = useSelector(state => state.cart); 

  const renderCartItem = ({item}) => (
    <View style={styles.cartItem}>
      <Image source={{uri: item.image}} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.cartItemPrice}>Price: ₹{item.discounted}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <AppHeader title="Your Cart" alignment="auto" />
    
      {cartItems.length > 0 ? (
          <View style={styles.cartList}>
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.id.toString()}
          style={styles.flat}

        />
        </View>
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
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyish,
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
  cartList: {
    padding:20 
  },
  flat:{
    paddingHorizontal: 20,
    paddingVertical:20,
    borderRadius: 10,
    backgroundColor:colors.white
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:20,
    backgroundColor: colors.white,
  },
  cartItemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    resizeMode:'contain',
    alignSelf:'center',
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
});