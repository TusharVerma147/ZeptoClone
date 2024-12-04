import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  removeProduct,
  decrementQuantity,
  incrementQuantity,
} from '../../redux/CartSlice';
import { RootState } from '../../redux/store'; 
import styles from './styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


interface Product {
  id: string;
  name: string;
  image: string;
  grams: number;
  price: number;
  discounted: number;
  quantity?: number; // Optional quantity if the product is added to the cart
}

interface CartItem extends Product {
  quantity: number;
}

interface ProductListProps {
  data: Product[]; // Array of Product objects passed as a prop
}

const ProductList: React.FC<ProductListProps> = ({ data }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartStore = useSelector((state: RootState) => state.cart); // Assuming your Redux state has a cart array

  const gotoDetail = (item: Product) => {
    navigation.navigate('Details', { item });
  };

  const renderProducts = ({ item }: { item: Product }) => {
    const isAddedToCart = cartStore.find((grocery: CartItem) => grocery.id === item.id);

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
        <Image source={{ uri: item.image }} style={styles.itemimage} />
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
