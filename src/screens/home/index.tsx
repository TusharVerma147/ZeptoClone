import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  ActivityIndicator,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';
import {Icons} from '../../assets';
import AppWrapper from '../../components/appWrapper';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import Carousel from 'react-native-reanimated-carousel';
import HomeTitles from '../../components/homeTitle';
import {products, trending_products} from '../../utils/mockdata/item';
import ProductList from '../../components/productList';
import key from '../../apis/api';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<any>;

const width = Dimensions.get('window').width;

interface UserLocation {
  latitude: number;
  longitude: number;
}

const Home: React.FC = () => {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [nearbyPlaces, setNearbyPlaces] = useState<any[]>([]);
  const [showNearbyPlaces, setShowNearbyPlaces] = useState<boolean>(false);

  const navigation = useNavigation<NavigationProp>();

  Geolocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: 'always',
    enableBackgroundLocationUpdates: true,
    locationProvider: 'auto',
  });

  useEffect(() => {
    Geolocation.requestAuthorization();
    requestLocationPermission();
    navigation.setOptions({
      headerLeft: () => null,
    });

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  const getCurrentLocation = () => {
    console.log('Fetch location');
    Geolocation.getCurrentPosition(
      async position => {
        if (position) {
          const {latitude, longitude} = position.coords;
          setUserLocation({
            latitude,
            longitude,
          });

          try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`,
            );
            const data = response.data;
            setAddress(data.results[0]?.formatted_address || '');
          } catch (error) {
            console.error('Error fetching address:', error);
          }
        }
        setLoading(false);
      },
      error => {
        console.log(error.code, error.message);
        setLoading(false);
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  };

  const requestLocationPermission = async () => {
    try {
      getCurrentLocation();
    } catch (err) {
      console.warn(err);
      setLoading(false);
    }
  };

  const fetchNearbyPlaces = async () => {
    if (!userLocation) return;

    const {latitude, longitude} = userLocation;

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&key=${key}`,
      );
      setNearbyPlaces(response.data.results);
      setShowNearbyPlaces(true);
    } catch (error) {
      console.error('Error fetching nearby places:', error);
    }
  };

  const handlePlaceSelect = (place: string) => {
    setAddress(place);
    setShowNearbyPlaces(false);
  };

  const handleListHeader = () => {
    if (userLocation) {
      getCurrentLocation();
      setShowNearbyPlaces(false);
    }
  };
  const handlePressOutside = () => {
    setShowNearbyPlaces(false);
  };

  const ListHeader = () => {
    return (
      <View style={{}}>
        <TouchableOpacity style={styles.listheader} onPress={handleListHeader}>
          <Image source={Icons.coordinate} style={styles.clock} />
          <Text style={styles.nearbyPlaceText}>Current Location</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <AppWrapper>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />

      <AppHeader address={address} onAddressPress={fetchNearbyPlaces} />

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={colors.zeptored} />
        </View>
      ) : (
        <ScrollView style={styles.content}>
          <AppBody />
        </ScrollView>
      )}
      <Modal
        visible={showNearbyPlaces}
        transparent={true}
        onRequestClose={handlePressOutside}>
        <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.modalOverlay}>
          <View style={styles.nearbyPlacesContainer}>
            <FlatList
              data={nearbyPlaces}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={ListHeader}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => handlePlaceSelect(item.name)}>
                  <View style={styles.nearbyPlaceItem}>
                    <Text style={styles.nearbyPlaceText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.place_id}
            />
          </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </AppWrapper>
  );
};

interface AppHeaderProps {
  address: string;
  onAddressPress: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({address, onAddressPress}) => {
  const navigation = useNavigation<NavigationProp>();

  const gotoSearchPage = () => {
    navigation.navigate('Search');
  };

  const gotoSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.headerparent}>
      <View style={styles.header}>
        <TouchableOpacity onPress={gotoSettings}>
          <Image source={Icons.accountwhite} style={styles.account} />
        </TouchableOpacity>
        <View>
          <View style={styles.delivery}>
            <Text style={styles.deliverytext}>Delivering In</Text>
            <Text style={styles.min}>10 Min</Text>
          </View>
          <View style={styles.addressView}>
            <Text style={styles.address}>{`${address.slice(0, 35)}`}</Text>
            <TouchableOpacity onPress={onAddressPress}>
              <Image source={Icons.dropdown} style={styles.clock} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.search}>
        <Image source={Icons.search} style={styles.searchicon} />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          onFocus={gotoSearchPage}
        />
      </View>
    </View>
  );
};

const AppBody: React.FC = () => {
  const banners = [
    {id: 1, source: Icons.ban1},
    {id: 5, source: Icons.ban6},
    {id: 2, source: Icons.ban2},
    {id: 3, source: Icons.ban4},
    {id: 4, source: Icons.ban5},
  ];

  const trendingProductsWithStringId = trending_products.map(product => ({
    ...product,
    id: product.id.toString(),
  }));

  const productsWithStringId = products.map(product => ({
    ...product,
    id: product.id.toString(),
  }));

  return (
    <View style={styles.flat}>
      <View>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay
          autoPlayInterval={2000}
          data={banners}
          renderItem={({item}) => (
            <View style={styles.caraouselimageview}>
              <Image source={item.source} style={styles.banner} />
            </View>
          )}
        />
      </View>
      <View>
        <HomeTitles title={'Your Go-to items'} />
        <ProductList data={productsWithStringId} />
      </View>
      <Image source={Icons.freshdeal} style={styles.freshdeal} />
      <View>
        <HomeTitles title={'Trending Products'} />
        <ProductList data={trendingProductsWithStringId} />
      </View>
    </View>
  );
};

export default Home;


