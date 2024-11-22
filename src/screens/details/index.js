import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {Icons} from '../../assets';
import colors from '../../theme/colors';
import HomeTitles from '../../components/homeTitle';
import OtherProducts from '../../components/otherProducts';
import {other_products} from '../../utils/mockdata/item';
import { trending_products } from '../../utils/mockdata/item';
import ProductList from '../../components/productList';
import AppHeader from '../../components/appHeader';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProduct,
  decrementQuantity,
  incrementQuantity,
} from '../../redux/CartSlice';

const width = Dimensions.get('window').width;

const Details = ({navigation}) => {
  const [isOpened, setIsOpened] = useState(false);
  const route = useRoute();
  const {item} = route.params;

  const dispatch = useDispatch();
  const cartStore = useSelector(state => state.cart);

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

  const handleDescription = () => {
    setIsOpened(!isOpened);
  };


  const hasItemsInCart = cartStore.length > 0;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <AppHeader  />
      <ScrollView>
        <View style={styles.imageview}>
          <Image source={{uri: item.image}} style={styles.itemimage} />
        </View>
        <View style={styles.nameview}>
          <View style={styles.timeview}>
            <Image source={Icons.clock1} style={styles.clock} />
            <Text style={styles.timetext}>10 Mins</Text>
          </View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.des}>{item.grams}g</Text>
          <Text style={styles.strikethroughText}>₹{item.price}</Text>
          <View style={styles.add}>
            <Text style={styles.price}>₹{item.discounted}</Text>

            {!isAddedToCart ? (
              <TouchableOpacity
                style={styles.addtocart}
                onPress={handleAddToCart}>
                <Text style={styles.addtocarttext}>ADD</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.removetocart}>
                <Text style={styles.removetocarttext} onPress={handleDecrement}> -</Text>
                <Text style={styles.removetocarttext}>
                  {isAddedToCart.quantity}
                </Text>
                <Text style={styles.removetocarttext} onPress={handleIncrement}>
                  +
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.productview}>
          <Text style={styles.producttext}>Product Description</Text>
          <TouchableOpacity
            onPress={handleDescription}
            style={styles.toggleButton}>
            <Image
              source={isOpened ? Icons.upload : Icons.drop}
              style={styles.clock}
            />
          </TouchableOpacity>
        </View>
        {isOpened && (
          <View style={styles.desview}>
            <Text style={styles.productDescription}>{item.description}</Text>
          </View>
        )}
        <View style={styles.likeview}>
          <HomeTitles
            title={'You might also like'}
            titleFontSize={23}
            titleFontWeight="500"
          />
           <OtherProducts data={trending_products} />
        </View>
      </ScrollView>
      {hasItemsInCart && (
        <View style={styles.footerview}>
          <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('Cart')}>
            <Image source={Icons.bag} style={styles.clock} />
            <Text style={styles.footertext}>View cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyish,
  },
  imageview: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  itemimage: {
    borderRadius: 10,
    resizeMode: 'contain',
    height: width / 2,
    width: width / 1.5,
  },
  nameview: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  name: {
    fontSize: 23,
    fontWeight: '500',
    paddingVertical: 10,
  },
  timeview: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#edecec',
    alignItems: 'center',
    paddingVertical: 3,
    width: width / 4.5,
  },
  clock: {
    height: 20,
    width: 20,
    marginHorizontal: 3,
  },
  timetext: {
    fontSize: 15,
    fontWeight: '500',
  },
  des: {
    fontSize: 15,
    fontWeight: '400',
    marginVertical: 2,
  },
  strikethroughText: {
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: colors.darkgrey,
    marginVertical: 2,
  },
  price: {
    fontSize: 15,
    color: colors.violet,
    fontWeight: '700',
    marginVertical: 2,
  },
  add: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productview: {
    flexDirection: 'row',
    width: {width},
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  producttext: {
    fontSize: 23,
    fontWeight: '500',
  },
  desview: {
    width: width,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  productDescription: {
    color: colors.darkgrey,
    fontSize: 20,
    fontWeight: '300',
  },
  footerview: {
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pink,
    marginBottom: 20,
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  footertext: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  likeview: {
    width: width,
    backgroundColor: colors.white,
    marginTop: 10,
    marginBottom: 10,
  },
  addtocart: {
    backgroundColor: colors.pink,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  addtocarttext: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800',
  },
  removetocart: {
    flexDirection: 'row',
    backgroundColor: colors.pink,
    borderRadius: 4,
    paddingVertical: 7,
    justifyContent: 'space-between',
  },
  removetocarttext: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800',
    paddingHorizontal: 8,
  },
});
