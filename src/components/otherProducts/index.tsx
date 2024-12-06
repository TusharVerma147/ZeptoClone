import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, incrementQuantity, decrementQuantity } from '../../redux/CartSlice';
import { RootState } from '../../redux/store'; 
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<any>;




interface Product {
  id: string;
  name: string;
  image: string;
  grams: number;
  price: number;
  discounted: number;
  quantity?: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface OtherProductsProps {
  data: Product[];
  flatListRef: React.RefObject<FlatList>;
}

const OtherProducts: React.FC<OtherProductsProps> = ({ data, flatListRef }) => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();
  const cartStore = useSelector((state: RootState) => state.cart); 



 

  const gotoDetail = (item: Product) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
    navigation.navigate('Details', { item });
  };

  const renderGridCategory = ({ item }: { item: Product }) => {
    const isAddedToCart = cartStore.find((grocery: CartItem) => grocery.id === item.id);

    const handleAddToCart = () => {
      const productToAdd = {
        ...item, 
        quantity: 1, 
      };
      dispatch(addProduct(productToAdd)); 
    };

    const handleIncrement = () => {
      dispatch(incrementQuantity(item));
    };

    const handleDecrement = () => {
      dispatch(decrementQuantity(item));
    };

    return (
      <TouchableOpacity onPress={() => gotoDetail(item)} style={styles.renderproduct}>
        <Image source={{ uri: item.image }} style={styles.itemimage} />
        <View style={styles.name}>
          <Text numberOfLines={1} style={styles.des}>
            {item.name}
          </Text>
          <Text style={styles.quant}>{item.grams}g</Text>
        </View>
        <View>
          <Text style={styles.strikethroughText}>₹{item.price}</Text>
          <Text style={styles.price}>₹{item.discounted}</Text>
        </View>

        {!isAddedToCart ? (
          <TouchableOpacity style={styles.cart} onPress={handleAddToCart}>
            <Text style={styles.carttext}>Add to Cart</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.removecart}>
            <Text style={styles.removecarttext} onPress={handleDecrement}>
              -
            </Text>
            <Text style={styles.removecarttextdigit}>{isAddedToCart.quantity}</Text>
            <Text style={styles.removecarttext} onPress={handleIncrement}>
              +
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        ref={flatListRef}
        ItemSeparatorComponent={() => <View style={styles.separate}></View>}
        numColumns={2}
        data={data}
        renderItem={renderGridCategory}
      />
    </View>
  );
};

export default OtherProducts;
