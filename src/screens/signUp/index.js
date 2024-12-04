import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Alert,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Icons} from '../../assets';
import colors from '../../theme/colors';
import CustomButton from '../../components/customButton';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import styles from './styles';


const width = Dimensions.get('window').width;


const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);


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
        console.log('User  is signed in: ', user);

        navigation.navigate('BottomTab');
      } else {
        console.log('User  is not signed in');
      }
    });

    return subscriber;
  }, [navigation]);

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log("id token", response)
      const googleCredential = auth.GoogleAuthProvider.credential(response?.data?.idToken);
      await auth().signInWithCredential(googleCredential);
      await AsyncStorage.setItem('key', 'true');
      // Alert.alert('User  signed in successfully!');
      Toast.show('User  logged in successfully');
      navigation.replace('BottomTab');
    } catch (error) {
      console.error(error);
      Alert.alert('Error signing in: ', error.message);
    }
  };

  const validateSignUp = () => {
    let flag = true;

    if (!name || !email || !password) {
      Alert.alert('Please fill all the fields');
      return;
    }

    if (name.length < 2) {
      setNameError('Name must be at least 2 characters long');
      flag = false;
    } else {
      setNameError(null);
    }

    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacterRegex.test(password)) {
      setPasswordError('Password must contain at least one special symbol');
      flag = false;
    } else {
      setPasswordError(null);
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      flag = false;
    } else {
      setEmailError(null);
    }

    if (flag) {
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      Toast.show('User  Registered successfully');
      navigation.navigate('MailLogin');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.violet} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.symbol} source={Icons.zeptooo} />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.logintext}>Sign Up</Text>

          <View style={styles.input}>
            <Image style={styles.clock} source={Icons.user} />{' '}
            <TextInput
              style={{flex: 1}}
              value={name}
              onChangeText={text => {
                setName(text), setNameError('');
              }}
              placeholder="Name"
            />
          </View>
          {nameError ? (
            <Text style={styles.error}>{nameError}</Text>
          ) : (
            <View style={styles.noerror}></View>
          )}

          <View style={styles.input}>
            <Image style={styles.clock} source={Icons.mail} />
            <TextInput
              style={{flex: 1}}
              value={email}
              onChangeText={text => {
                setEmail(text), setEmailError('');
              }}
              placeholder="Email"
              autoCapitalize="none"
            />
          </View>
          {emailError ? (
            <Text style={styles.error}>{emailError}</Text>
          ) : (
            <View style={styles.noerror}></View>
          )}

          <View style={styles.input}>
            <Image style={styles.clock} source={Icons.pass} />
            <TextInput
              style={{flex: 1}}
              value={password}
              onChangeText={text => {
                setPassword(text), setPasswordError('');
              }}
              placeholder="Password"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image
                style={styles.clock}
                source={passwordVisible ? Icons.eyeclose : Icons.eye}
              />
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={styles.error}>{passwordError}</Text>
          ) : (
            <View style={styles.noerror}></View>
          )}

          <CustomButton
            title="Sign Up"
            style={{marginTop: 10}}
            textStyle={{fontWeight: '700'}}
            borderRadius={50}
            backgroundColor={colors.reddish}
            textColor={colors.white}
            onPress={validateSignUp}
          />
          <View style={styles.divideview}>
            <View style={styles.orview}></View>
            <Text style={styles.ortext}>or</Text>
            <View style={styles.orview}></View>
          </View>
          <CustomButton
            icon={Icons.google}
            title="SignIn with Google"
            onPress={onGoogleButtonPress}
            textStyle={{fontWeight: '700'}}
            borderRadius={50}
            backgroundColor={colors.white}
            textColor={colors.black}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.bytext}>Already have an account?</Text>
          <View style={styles.policy}>
            <Text
              onPress={() => navigation.navigate('MailLogin')}
              style={styles.termstext}>
              Login
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignUp;

