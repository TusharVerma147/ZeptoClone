import React, { useEffect } from 'react';
import { View, StatusBar, Image } from 'react-native';
import { Icons } from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import styles from './styles';
import Geolocation from '@react-native-community/geolocation';


interface SplashProps {
  navigation: {
    replace: (screen: string) => void;
  };
}

const Splash: React.FC<SplashProps> = ({ navigation }) => {



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
