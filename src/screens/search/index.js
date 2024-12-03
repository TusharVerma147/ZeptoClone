import {
    View,
    Text,
    PermissionsAndroid,
    Platform,
    Alert,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions,
    TextInput,
    FlatList,
    TouchableOpacity,
  } from 'react-native';
  import React, { useEffect, useState, useRef } from 'react';
  import { useNavigation, useFocusEffect } from '@react-navigation/native';
  import colors from '../../theme/colors';
  import { Icons } from '../../assets';
  import AppWrapper from '../../components/appWrapper';
  import { products, trending_products } from '../../utils/mockdata/item';
  
  const width = Dimensions.get('window').width;
  
  const Search = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [searchProducts, setSearchProducts] = useState([]);
    const [searchTrendingProducts, setSearchedTrendingProducts] = useState([]);
    
    
    const searchInputRef = useRef(null);
  
    const goBack = () => {
      navigation.navigate('BottomTab');
    };
  
    useEffect(() => {
      if (search) {
        const filtered = products.filter(product =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );
        const filteredTrending = trending_products.filter(trendingProduct =>
          trendingProduct.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchProducts(filtered);
        setSearchedTrendingProducts(filteredTrending);
      } else {
        setSearchProducts([]);
        setSearchedTrendingProducts([]);
      }
    }, [search]);
  
    useFocusEffect(
      React.useCallback(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, [])
    );
  
    const handleItemPress = (item) => {
      navigation.navigate('Details', { item });
    };
  
    const renderItem = ({ item }) => (
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
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={getEmptyComponentMessage()} 
        />
      </AppWrapper>
    );
  };
  
  export default Search;
  
  const styles = StyleSheet.create({
    search: {
      marginHorizontal: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: 'grey',
      paddingHorizontal: 10,
      marginVertical: Platform.IOS ? 0 : 20,
    },
    searchInput: {
      padding: 15,
      fontSize: 20,
      color: colors.black,
      flex: 1,
    },
    searchicon: {
      height: 30,
      width: 30,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    itemImage: {
      width: 100,
      height: 60,
      borderRadius: 5,
      marginRight: 20,
      resizeMode: 'contain',
   },
    itemName: {
      fontSize: 20,
      color: colors.black,
    },
    noResults: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: colors.grey,
    },
  });