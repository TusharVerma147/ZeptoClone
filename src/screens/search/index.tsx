import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, TextInput, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Icons } from '../../assets';
import AppWrapper from '../../components/appWrapper';
import { products, trending_products } from '../../utils/mockdata/item';
import styles from './styles';
import colors from '../../theme/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { addSearchTerm, updateSearchHistory } from '../../redux/SearchSlice'; 

type NavigationProp = StackNavigationProp<any>;

interface Product {
  id: number;
  name: string;
  image: string;
}

const Search = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();
  const searchHistory = useSelector((state: any) => state.search.searchHistory);  
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
    dispatch(addSearchTerm(item));
    navigation.navigate('Details', { item });
  };

  const handleHistoryItemPress = (item: Product) => {
    const updatedHistory = [item, ...searchHistory.filter((historyItem: Product) => historyItem.id !== item.id)];
    dispatch(updateSearchHistory(updatedHistory));
    navigation.navigate('Details', { item });
  };

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSearchHistoryItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => handleHistoryItemPress(item)} style={styles.historyItemContainer}>
      <View style={styles.searchhistory}>
        <Image source={Icons.search_history} style={styles.clock} />
        <Text style={styles.historyItemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const getEmptyComponentMessage = () => {
    if (search) {
      return <Text style={styles.noResults}>No items found</Text>;
    }
    return (
      <FlatList
        data={searchHistory}
        renderItem={renderSearchHistoryItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.noResults}>Search for the desired products</Text>}
      />
    );
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
          onChangeText={(text) => {
            setSearch(text);
            if (text === '') {
              setSearchProducts([]);
              setSearchedTrendingProducts([]);
            }
          }}
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
