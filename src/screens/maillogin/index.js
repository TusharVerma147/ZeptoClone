import { View, Text, StatusBar, StyleSheet, TextInput, Alert, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import CustomButton from '../../components/customButton';
import colors from '../../theme/colors';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Icons, Images } from '../../assets';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MailLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleEmailChange = (text) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(text)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError(null);
    }
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    if (emailError) {
      Alert.alert('Error', emailError);
      return;
    }
    try {
      await auth().signInWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('key', 'true'); 
      Alert.alert('Success', 'User  logged in successfully!');
      navigation.navigate('BottomTab'); 
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
    <StatusBar barStyle={'light-content'} />
    <View style={styles.container}>
      {/* <View style={styles.top}> */}
        <Image style={styles.symbol} source={Icons.zeptooo} />
      {/* </View> */}
      <View>
      <Text style={styles.logintext}>Signin</Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.input}>
            {/* <View style={styles.input}> */}
        <Image style={styles.clock} source={Icons.mail} />
          <TextInput
            style={{flex:1}}
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Email"
            autoCapitalize='none'
          />
          {/* </View> */}
        
        </View>
        {emailError && <Text style={styles.error}>{emailError}</Text>}
        <View style={styles.input}>
        <Image style={styles.clock} source={Icons.pass} />
          <TextInput
            // style={styles.input}
            style={{flex:1}}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image style={styles.clock} source={ passwordVisible ? Icons.eye : Icons.eyeclose}/>
          </TouchableOpacity>
                
        </View>
        <CustomButton
          title="Login"
          style={{ marginTop: 10 }}
          textStyle={{ fontWeight: '700' }}
          borderRadius={50}
          backgroundColor={colors.reddish}
          textColor={colors.white}
          onPress={handleLogin} // Call the sign-up function
        />
        <View style={styles.footer}>
          <Text style={styles.bytext}>Don't have an account?</Text>
          <View style={styles.policy}>
            <Text onPress={() => navigation.navigate('SignUp')} style={styles.termstext}>Sign Up</Text>
          </View>
        </View>
      </View>
    </View>
  </>
  );
};

export default MailLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.violet,
        paddingHorizontal: 20,
        justifyContent:'center'
      },
      symbol: {
        width: width-20,
        height: width,
        resizeMode:'contain'
      },
      top: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottom: {
        justifyContent: 'center',
        // flex: 1,
      },
     inputContainer: {
        marginVertical: 10,
      },
      label: {
        color: colors.reddish,
        fontSize: responsiveFontSize(2),
        fontWeight: '500',
      },
      input: {
        height: 50,
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: colors.black,
        backgroundColor: colors.white,
        flexDirection:'row',
        marginVertical:10,
        alignItems:'center'
      },
      error: {
        color: colors.reddish,
        fontSize: responsiveFontSize(2),
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
        color: colors.zeptored,
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
      exclude: {
        alignSelf: 'center',
        height: responsiveWidth(50),
        width: responsiveWidth(50),
        resizeMode: 'contain',
      },
      clock: {
        height:30,  
        width: 25,
        resizeMode: 'contain',
        marginHorizontal: 5,
        tintColor:colors.purple,
      },
      logintext:{
        color:colors.zeptored,
        fontSize:responsiveFontSize(4),
        textAlign:'center',
      //   textShadowColor: colors.zeptored,
      // textShadowOffset: {width:-1, height: 3},
      // textShadowRadius: 8,
      fontWeight:'700',
      letterSpacing: 1.5,
      marginBottom: 5
      }
});