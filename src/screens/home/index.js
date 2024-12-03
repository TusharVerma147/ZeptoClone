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
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';
import {Icons} from '../../assets';
import AppWrapper from '../../components/appWrapper';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Geolocation from '@react-native-community/geolocation';
import RBSheet from 'react-native-raw-bottom-sheet';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import CustomButton from '../../components/customButton';
import axios from 'axios';
import Carousel from 'react-native-reanimated-carousel';
import HomeTitles from '../../components/homeTitle';
import {products, trending_products} from '../../utils/mockdata/item';
import ProductList from '../../components/productList';
import {vh, vw} from '../../utils/dimensions';
import key from '../../apis/api';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Home = ({navigation}) => {
  const [userLocation, setuserLocation] = useState([]);
  const [address, setAddress] = useState('');
  console.log('address--->', address);

  const bottomSheetRef = useRef(null);

  useEffect(() => {
    requestLocationPermission();

    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
    }
  }, []);

  const getCurrentLocation = () => {
    console.log('Fetch location');
    Geolocation.getCurrentPosition(
      async position => {
        console.log('Position:', position);
        if (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          setuserLocation({
            latitude: position.coords?.latitude,
            longitude: position.coords?.longitude,
          });
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${key}`,
          );
          const data = response.data;
          // console.log(response);
          setAddress(data.results[0]?.formatted_address);
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
          // console.log('You can use the location');
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } else if (Platform.OS === 'ios') {
        const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        if (result === RESULTS.GRANTED) {
          console.log('You can use the location');
          getCurrentLocation();
        } else {
          const requestResult = await request(
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
          );
          if (requestResult === RESULTS.GRANTED) {
            // console.log('You can use the location');
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
      <AppHeader add={address} />
      <ScrollView style={styles.content}>
        <AppBody />
      </ScrollView>
      {/* 
      <RBSheet
        ref={bottomSheetRef}
        closeOnPressMask
        paddingHorizontal={20}
        height={height / 1.75}
        draggable={true}
        openDuration={250}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            // backgroundColor:'red'
          },
          draggableIcon: {
            width: '20%',
          },
        }}>
        <View style={{alignItems: 'center'}}>
          <Image source={Icons.location1} style={styles.location} />
          <Text style={styles.locationtext}>Your device location is off</Text>
          <Text style={styles.locationsubtext}>
            Please enable location permission for better delivery experience
          </Text>
          <CustomButton
            title="Continue"
            style={{
              marginTop: responsiveHeight(3),
              paddingHorizontal: responsiveWidth(35),
            }}
            textStyle={{fontWeight: '700'}}
            borderRadius={10}
            backgroundColor={'#DE3163'}
            textColor={colors.white}
          />
        </View>
      </RBSheet> */}
    </AppWrapper>
  );
};

const AppHeader = ({add}) => {
  const navigation = useNavigation();
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
          <Text style={styles.address}>{`${add.slice(0, 50)}`}</Text>
          {/* <Text style={styles.address}>Home - 1st Floor</Text> */}
        </View>
        {/* <TouchableOpacity>
          <Image source={Icons.writingwhite} style={styles.account} />
        </TouchableOpacity> */}
      </View>
      <View
        style={{
          marginHorizontal: 15,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1.5,
          borderColor: 'grey',
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
        <Image source={Icons.search} style={{height: 20, width: 20}} />
        <TextInput
          placeholder="Search"
          style={{padding: 15, fontSize: 15, color: colors.black, flex: 1}}
        />
      </View>
    </View>
  );
};

const AppBody = () => {
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
          backgroundColor={'red'}
          borderWidth={1}
          loop
          width={width}
          height={width / 2}
          autoPlay
          autoPlayInterval={2000}
          data={banners}
          renderItem={({item}) => (
            <View style={{alignItems: 'center'}}>
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

const styles = StyleSheet.create({
  headerparent: {
    paddingTop: width / 25,
    // backgroundColor:'red'
  },

  header: {
    flexDirection: 'row',
    paddingLeft: 10,
    // backgroundColor:'green',
    paddingRight: 30,
    alignItems: 'center',
    paddingVertical: 10,
  },
  account: {
    height: 60,
    width: 60,
    tintColor: colors.violet,
  },
  delivery: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliverytext: {
    color: colors.black,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    marginLeft: 10,
    // marginTop:15,
    // backgroundColor:'green'
  },
  min: {
    color: colors.violet,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    marginLeft: 3,
    // marginTop:15
  },
  address: {
    color: colors.black,
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 20,
  },
  location: {
    height: 200,
    width: 200,
  },
  locationtext: {
    color: colors.black,
    fontSize: responsiveFontSize(2.7),
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 10,
    marginBottom: responsiveHeight(2),
    marginTop: 5,
  },
  locationsubtext: {
    color: colors.black,
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
  },
  content: {
    flex: 1,
  },
  banner: {
    width: width - 20,
    height: width / 2,
    resizeMode: 'stretch',
    borderRadius: 20,
    alignSelf: 'center',
  },
  flat: {
    marginTop: 10,
    // flex: 1,
  },
  freshdeal: {
    width: {width},
    height: width / 2,
  },
});
