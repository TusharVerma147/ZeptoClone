import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import CustomButton from '../../components/customButton';
import colors from '../../theme/colors';
import {vh} from '../../utils/dimensions';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Icons} from '../../assets';

const width = Dimensions.get('window').width;

const MailLogin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetEmailError, setResetEmailError] = useState(null);
  const [resetPasswordEmailSent, setResetPasswordEmailSent] = useState(false);

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
      console.log('id token', response);
      const googleCredential = auth.GoogleAuthProvider.credential(
        response?.data?.idToken,
      );
      await auth().signInWithCredential(googleCredential);
      await AsyncStorage.setItem('key', 'true');
      Toast.show('User  logged in successfully!');
      navigation.replace('BottomTab');
    } catch (error) {
      console.error(error);
      Alert.alert('Error signing in: ', error.message);
    }
  };

  const validateLogin = () => {
    let flag = true;
    if (!email || !password) {
      Alert.alert('Please fill the user credentials');
      return;
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
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('key', 'true');
      Toast.show('User  logged in successfully');
      navigation.replace('BottomTab');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setEmailError(
          "Can't find Account. The email that you entered doesn't have an account associated with it.",
        );
      } else {
        console.log(error.message);
        Alert.alert('Error', error.message);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleForgotPassword = async () => {
    if (!resetEmail) {
      setResetEmailError('Please enter your email address');
      return;
    }

    try {
      await auth().sendPasswordResetEmail(resetEmail);
      console.log('Password reset email sent!');
      Toast.show('Password reset email sent!');
      setModalVisible(false);
      setResetEmail('');
    } catch (error) {
      console.log('Error sending reset email:', error);
      setResetEmailError('Error sending reset password email');
    }
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.violet} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.symbol} source={Icons.zeptooo} />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.logintext}>Signin</Text>
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
            <View style={{height: width / 20}}></View>
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
            <View style={{height: width / 20}}></View>
          )}
          <CustomButton
            title="Login"
            style={{marginTop: 5}}
            textStyle={{fontWeight: '700'}}
            borderRadius={50}
            backgroundColor={colors.reddish}
            textColor={colors.white}
            onPress={validateLogin}
          />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
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
          <View style={styles.footer}>
            <Text style={styles.bytext}>Don't have an account?</Text>
            <View style={styles.policy}>
              <Text
                onPress={() => navigation.navigate('SignUp')}
                style={styles.termstext}>
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableWithoutFeedback onPress={() => {setModalVisible(false), setResetEmailError('')}}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Reset Your Password</Text>
              <Text style={styles.modalText}>
                Enter your email and you may recieve link to reset password.
              </Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Enter your email"
                value={resetEmail}
                onChangeText={text => {
                  setResetEmail(text), setResetEmailError('');
                }}
                autoCapitalize="none"
              />
              {resetEmailError ? (
                <Text style={styles.error}>{resetEmailError}</Text>
              ) : (
                <View style={{height: width / 20}}></View>
              )}
              <View style={styles.modalButtons}>
                <CustomButton
                  title="Reset"
                  style={{marginTop: 5}}
                  textStyle={{fontWeight: '500'}}
                  borderRadius={5}
                  backgroundColor={colors.reddish}
                  textColor={colors.white}
                  onPress={handleForgotPassword}
                  padding={vh(10)}
                />
                <CustomButton
                  title="Cancel"
                  style={{marginTop: 5}}
                  textStyle={{fontWeight: '500'}}
                  borderRadius={5}
                  backgroundColor={colors.grey}
                  textColor={colors.white}
                  onPress={() => {setModalVisible(false), setResetEmailError('')}}
                  padding={vh(10)}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default MailLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.violet,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    flex: 0.5,
  },
  symbol: {
    width: width / 1.5,
    height: vh(300),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  bottom: {
    flex: 0.8,
  },
  input: {
    height: vh(50),
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: colors.black,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  error: {
    color: colors.zeptored,
    fontSize: responsiveFontSize(1.8),
    height: 30,
    marginTop: 0.4,
  },
  footer: {
    marginTop: vh(40),
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
  clock: {
    height: 30,
    width: 25,
    resizeMode: 'contain',
    marginHorizontal: 5,
    tintColor: colors.purple,
  },
  logintext: {
    color: colors.zeptored,
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 1.8,
    marginBottom: 10,
  },
  divideview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(10),
    marginBottom: vh(30),
  },
  orview: {
    height: 1,
    width: width / 2.5,
    backgroundColor: colors.zeptored,
    marginHorizontal: 5,
  },
  ortext: {
    fontSize: responsiveFontSize(2),
    color: colors.white,
  },
  forgot: {
    color: colors.zeptored,
    fontWeight: '700',
    fontSize: responsiveFontSize(2),
    textAlign: 'right',
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    height: width / 1.2,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 15,
    marginVertical: 10,
    fontWeight: '400',
    // textAlign: 'center',
    color: colors.grey,
  },
  modalInput: {
    height: vh(50),
    borderColor: colors.greyish,
    borderWidth: 1,
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  modalButtons: {
    marginVertical: 10,
    width: '48%',
    alignSelf: 'center',
  },
});
