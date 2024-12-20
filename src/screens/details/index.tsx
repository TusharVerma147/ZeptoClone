import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useRoute, RouteProp,} from '@react-navigation/native';
import {Icons} from '../../assets';
import HomeTitles from '../../components/homeTitle';
import OtherProducts from '../../components/otherProducts';
import {trending_products} from '../../utils/mockdata/item';
import AppHeader from '../../components/appHeader';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProduct,
  decrementQuantity,
  incrementQuantity,
} from '../../redux/CartSlice';
import styles from './styles';
import {RootState} from '../../redux/store';

interface ProductItem {
  id: string;
  name: string;
  grams: string;
  price: number;
  discounted: number;
  image: string;
  description: string;
}
type DetailsScreenRouteProp = RouteProp<
  {Details: {item: ProductItem}},
  'Details'
>;

const Details: React.FC<{navigation: any}> = ({navigation}) => {
  const [isOpened, setIsOpened] = useState(false);
  const route = useRoute<DetailsScreenRouteProp>();
  const {item} = route.params;

  const dispatch = useDispatch();
  const cartStore = useSelector((state: RootState) => state.cart);

  const isAddedToCart = cartStore.find(
    (grocery: any) => grocery.id === item.id,
  );


  const handleAddToCart = () => {
    const productToAdd = {
      ...item,
      quantity: 1,
    };
    dispatch(addProduct(productToAdd));
  };

  const handleIncrement = () => {
    console.log('quantity', isAddedToCart?.quantity);
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item));
  };

  const handleDescription = () => {
    setIsOpened(!isOpened);
  };

  const gotoCart = () => {
    navigation.navigate('Cart');
  };

  const hasItemsInCart = cartStore.length > 0;

  const flatListRef = useRef<any>(null);

  const trendingProductsWithStringId = trending_products.map(product => ({
    ...product,
    id: product.id.toString(),
  }));

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <AppHeader />
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
                <TouchableOpacity onPress={handleDecrement}>
                  <Text style={styles.removetocarttext}>-</Text>
                </TouchableOpacity>
                <Text style={styles.removetocarttext}>
                  {isAddedToCart?.quantity}
                </Text>
                <TouchableOpacity onPress={handleIncrement}>
                  <Text style={styles.removetocarttext}>+</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <TouchableOpacity onPress={handleDescription} style={styles.productview} activeOpacity={0.8}>
          <Text style={styles.producttext}>Product Description</Text>
            <Image
              source={isOpened ? Icons.upload : Icons.drop}
              style={styles.clock}
            />
          </TouchableOpacity>
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
          <OtherProducts
            data={trendingProductsWithStringId}
            flatListRef={flatListRef}
          />
        </View>
      </ScrollView>
      {hasItemsInCart && (
        <View style={styles.footerview}>
          <TouchableOpacity style={styles.footer} onPress={gotoCart}>
            <Image source={Icons.bag} style={styles.clock} />
            <Text style={styles.footertext}>View cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Details;
