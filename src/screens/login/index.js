import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Icons} from '../../assets';
import colors from '../../theme/colors';
import CustomButton from '../../components/customButton';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Animated, {FadeInLeft, FadeInRight} from 'react-native-reanimated';


const Login = ({navigation}) => {
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
            textStyle={{fontWeight: '700'}}
            borderRadius={50}
            backgroundColor={colors.white}
            textColor={colors.black}
          />
          <CustomButton
            title="Continue"
            onPress={() => navigation.navigate('BottomTab')}
            style={{marginTop: 20}}
            textStyle={{fontWeight: '700'}}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.violet,
    paddingHorizontal: 20,
  },
  symbol: {
    width: responsiveWidth(80),
    height: responsiveWidth(60),
    alignSelf: 'center',
  },
  exclude: {
    alignSelf: 'center',
    height: responsiveWidth(50),
    width: responsiveWidth(50),
    resizeMode: 'contain',
  },
  top: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 85,
  },
  policy: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footer: {
    margin: 30,
  },
  bytext: {
    color: colors.white,
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  termstext: {
    color: colors.reddish,
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  andtext: {
    color: colors.white,
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    marginHorizontal: 3,
  },
});
