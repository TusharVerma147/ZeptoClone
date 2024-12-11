import React, { useEffect, useState, useRef, useCallback } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StatusBar, 
  TextInput, 
  FlatList, 
  Dimensions 
} from 'react-native';
import { useNavigation, useFocusEffect} from '@react-navigation/native';
import { Icons } from '../../assets';
import AppWrapper from '../../components/appWrapper';
import { products, trending_products } from '../../utils/mockdata/item';
import styles from './styles';
import colors from '../../theme/colors';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<any>;


interface Product {
  id: number;
  name: string;
  image: string;
}

const Search = () => {
  const navigation = useNavigation<NavigationProp>();
  const [search, setSearch] = useState<string>('');
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);
  const [searchTrendingProducts, setSearchedTrendingProducts] = useState<Product[]>([]);
  
  const searchInputRef = useRef<TextInput | null>(null);
  
  const goBack = () => {
    navigation.navigate('BottomTab');
  };
  
  useEffect(() => {
    if (search) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      const filteredTrending = trending_products.filter((trendingProduct) =>
        trendingProduct.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchProducts(filtered);
      setSearchedTrendingProducts(filteredTrending);
    } else {
      setSearchProducts([]);
      setSearchedTrendingProducts([]);
    }
  }, [search]);
  
  const focusSearchInput = useCallback(() => {
    const timeoutId = setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 100); 

    return () => clearTimeout(timeoutId); 
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      focusSearchInput();
    }, [focusSearchInput])
  );
  
  const handleItemPress = (item: Product) => {
    navigation.navigate('Details', { item });
  };
  
  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );
  
  const getEmptyComponentMessage = () => {
    if (search) {
      return <Text style={styles.noResults}>No items found</Text>;
    }
    return <Text style={styles.noResults}>Search for the desired products</Text>;
  };
  
  return (
    <AppWrapper>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <View style={styles.search}>
        <TouchableOpacity onPress={goBack}>
          <Image source={Icons.left} style={styles.searchicon} />
        </TouchableOpacity>
        <TextInput
          ref={searchInputRef}
          placeholder="Search"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={[...searchProducts, ...searchTrendingProducts]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={getEmptyComponentMessage()}
      />
    </AppWrapper>
  );
};

export default Search;
