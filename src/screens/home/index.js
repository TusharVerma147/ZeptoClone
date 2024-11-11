
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  Alert,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../utils/colors';
import {Icons} from '../../assets';
import AppWrapper from '../../components/appWrapper';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Geolocation from 'react-native-geolocation-service';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import axios from 'axios';

const Home = () => {

  const [userLocation, setuserLocation] = useState([]);
  const [address, setAddress] =  useState('');
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
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
      } catch (err) {
        console.warn(err);
      }
    } else {
     
      const permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
      const result = await request(permission);

      if (result === RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        Alert.alert(
          'Permission Denied',
          'Location permission is required for this feature.',
        );
      }
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
       async(position) => {
        console.log(position);
        if(position){
          setuserLocation({
            latitude:position.coords?.latitude,
            longitude:position.coords?.longitude,
          });
          // const {data} = await axios.get(``);
          // 
        }
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <AppWrapper>
      <StatusBar barStyle={'dark-content'}/>
      <AppHeader/>
     <AppBody/>
      <AppFooter/>
   </AppWrapper>
  );
};

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={Icons.account} style={styles.account} />
      <View>
        <View style={styles.delivery}>
          <Text style={styles.deliverytext}>Delivering In</Text>
          <Text style={styles.min}>10 Min</Text>
        </View>
        <Text style={styles.address}>Home - 1st floor</Text>
      </View>
      <Image source={Icons.writing} style={styles.account} />
    </View>
  );
};

const AppBody = () => {
  return (
    <View>
      {/* <Text>Body</Text> */}
    </View>
  );
};

const AppFooter = () => {
  return (
    <View>
      {/* <Text>Footer</Text> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    // backgroundColor:'red',
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  account: {
    height: 40,
    width: 40,
  },
  delivery: {
    flexDirection: 'row',
  },
  deliverytext: {
    color: colors.black,
    fontSize: responsiveFontSize(3),
    fontWeight: '700',
    marginHorizontal: 3,
  },
  min: {
    color: colors.violet,
    fontSize: responsiveFontSize(3),
    fontWeight: '700',
  },
  address: {
    color: colors.black,
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    textAlign: 'center',
  },
});
