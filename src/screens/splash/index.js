import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../../theme/colors';
import {Icons} from '../../assets';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, {FadeInLeft, FadeInRight} from 'react-native-reanimated';

const Splash = ({navigation}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     AsyncStorage.getItem('key')
  //       .then(result => {
  //         console.log('AsyncStorage result: ', result);
  //         if (result) {
  //           navigation.replace('BottomTab');
  //         } else {
  //           navigation.replace('Login');
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, 2000);
  // }, [navigation]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const result = await AsyncStorage.getItem('key');
        console.log('result-->', result);
        if (result === 'true') {
          navigation.replace('BottomTab');
        } else {
          navigation.replace('MailLogin');
        }
      } catch (err) {
        console.log(err);
        navigation.replace('MailLogin');
      }
    };

    const timer = setTimeout(checkLoginStatus, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.View entering={FadeInLeft.delay(200).duration(600)}>
      <Image style={styles.splashicon} source={Icons.zeptoicon} />
      </Animated.View>
      
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.violet,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashicon: {
    width: responsiveWidth(100),
    height: 400,
    resizeMode:'contain'
  },
});
