import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  Image,
  StatusBar,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';
import {Icons} from '../../assets';
import AppWrapper from '../../components/appWrapper';
import Geolocation from '@react-native-community/geolocation';
import RBSheet from 'react-native-raw-bottom-sheet';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import axios from 'axios';
import Carousel from 'react-native-reanimated-carousel';
import HomeTitles from '../../components/homeTitle';
import {products, trending_products} from '../../utils/mockdata/item';
import ProductList from '../../components/productList';
import key from '../../apis/api';
import styles from './styles';

const width = Dimensions.get('window').width;

interface UserLocation {
  latitude: number;
  longitude: number;
}

const Home: React.FC = () => {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const getCurrentLocation = () => {
    console.log('Fetch location');
    Geolocation.getCurrentPosition(
      async position => {
        console.log('Position:', position);
        if (position) {
          const {latitude, longitude} = position.coords;
          setUserLocation({
            latitude,
            longitude,
          });

          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`,
          );
          const data = response.data;
          setAddress(data.results[0]?.formatted_address || '');
        }
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  };

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Zepto',
            message:
              'This app needs access to your location to provide location-based features.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } else if (Platform.OS === 'ios') {
        const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        if (result === RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          const requestResult = await request(
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
          );
          if (requestResult === RESULTS.GRANTED) {
            getCurrentLocation();
          } else {
            console.log('Location permission denied');
          }
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <AppWrapper>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <AppHeader address={address} />
      <ScrollView style={styles.content}>
        <AppBody />
      </ScrollView>
    </AppWrapper>
  );
};

interface AppHeaderProps {
  address: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({address}) => {
  const navigation = useNavigation();

  const gotoSearchPage = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.headerparent}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image source={Icons.accountwhite} style={styles.account} />
        </TouchableOpacity>
        <View>
          <View style={styles.delivery}>
            <Text style={styles.deliverytext}>Delivering In</Text>
            <Text style={styles.min}>10 Min</Text>
          </View>
          <Text style={styles.address}>{`${address.slice(0, 50)}`}</Text>
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
        <HomeTitles
          title={'Your Go-to items'}
          subtitle={'See All'}
          onSubtitlePress={() => console.log('Subtitle pressed')}
          iconSource={Icons.forward1}
        />
        <ProductList data={products} />
      </View>
      <Image source={Icons.freshdeal} style={styles.freshdeal} />
      <View>
        <HomeTitles
          title={'Trending Products'}
          subtitle={'See All'}
          onSubtitlePress={() => console.log('Subtitle pressed')}
          iconSource={Icons.forward1}
        />
        <ProductList data={trending_products} />
      </View>
    </View>
  );
};

export default Home;