import React, { useEffect } from 'react';
import { View, Text, StatusBar, Image, Alert } from 'react-native';
import { Icons } from '../../assets';
import colors from '../../theme/colors';
import CustomButton from '../../components/customButton';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import { NavigationProp } from '@react-navigation/native'; 
import styles from './styles';

type NavigationProps = {
  navigate: (screen: string) => void;
  replace: (screen: string) => void;
};

interface LoginProps {
  navigation: NavigationProps;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '618497774501-knq282thiio2qdckfsnpr5d88lj5a08t.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in: ', user);
        navigation.navigate('BottomTab');
      } else {
        console.log('User is not signed in');
      }
    });

    return subscriber;
  }, [navigation]);

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log('id token', response);
  
      
      const idToken = response?.data?.idToken;
      if (!idToken) {
        throw new Error("Google sign-in did not return an ID token.");
      }
  
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      await AsyncStorage.setItem('key', 'true');
      Toast.show('User logged in successfully!', Toast.SHORT);
      navigation.replace('BottomTab');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error signing in: ', error.message);
    }
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <View style={styles.top}>
          <Image style={styles.symbol} source={Icons.symbol} />

          <Animated.View entering={FadeInLeft.delay(800).duration(500)}>
            <Image style={styles.exclude} source={Icons.exclude} />
          </Animated.View>
        </View>
        <View style={styles.bottom}>
          <CustomButton
            icon={Icons.google}
            title="SignIn with Google"
            onPress={onGoogleButtonPress}
            textStyle={{ fontWeight: '700' }}
            borderRadius={50}
            backgroundColor={colors.white}
            textColor={colors.black}
          />
          <CustomButton
            title="Continue"
            onPress={() => navigation.navigate('BottomTab')}
            style={{ marginTop: 20 }}
            textStyle={{ fontWeight: '700' }}
            borderRadius={50}
            backgroundColor={colors.reddish}
            textColor={colors.white}
          />
          <View style={styles.footer}>
            <Text style={styles.bytext}>By continuing, you agree to our</Text>
            <View style={styles.policy}>
              <Text style={styles.termstext}>Terms of Use</Text>
              <Text style={styles.andtext}>&</Text>
              <Text style={styles.termstext}>Privacy Policy</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
