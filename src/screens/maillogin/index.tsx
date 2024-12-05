import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView
} from 'react-native';
import auth from '@react-native-firebase/auth';
import CustomButton from '../../components/customButton';
import colors from '../../theme/colors';
import { vh } from '../../utils/dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Icons } from '../../assets';
import styles from './styles';

type NavigationProps = {
  navigate: (screen: string) => void;
  replace: (screen: string) => void;
};

interface MailLoginProps {
  navigation: NavigationProps;
}

const MailLogin: React.FC<MailLoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [resetEmail, setResetEmail] = useState<string>('');
  const [resetEmailError, setResetEmailError] = useState<string | null>(null);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '618497774501-knq282thiio2qdckfsnpr5d88lj5a08t.apps.googleusercontent.com',
      offlineAccess: true,
    });

   
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

   
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in: ', user);
        navigation.replace('BottomTab');
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
        throw new Error('Google sign-in did not return an ID token.');
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
      Toast.show('User logged in successfully', Toast.SHORT);
      navigation.replace('BottomTab');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        setEmailError(
          "Can't find Account. The email that you entered doesn't have an account associated with it."
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
      Toast.show('Password reset email sent!', Toast.SHORT);
      setModalVisible(false);
      setResetEmail('');
    } catch (error: any) {
      console.log('Error sending reset email:', error);
      setResetEmailError('Error sending reset password email');
    }
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.violet} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={styles.header}>
             
              {!keyboardVisible && (
                <Image style={styles.symbol} source={Icons.zeptooo} />
              )}
            </View>

            <View style={styles.bottom}>
              <Text style={styles.logintext}>Signin</Text>
              <View style={styles.input}>
                <Image style={styles.clock} source={Icons.mail} />
                <TextInput
                  style={{ flex: 1 }}
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                    setEmailError('');
                  }}
                  placeholder="Email"
                  autoCapitalize="none"
                />
              </View>
              {emailError ? <Text style={styles.error}>{emailError}</Text> : <View style={styles.noerror}></View>}
              
              <View style={styles.input}>
                <Image style={styles.clock} source={Icons.pass} />
                <TextInput
                  style={{ flex: 1 }}
                  value={password}
                  onChangeText={text => {
                    setPassword(text);
                    setPasswordError('');
                  }}
                  placeholder="Password"
                  secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Image style={styles.clock} source={passwordVisible ? Icons.eyeclose : Icons.eye} />
                </TouchableOpacity>
              </View>
              {passwordError ? <Text style={styles.error}>{passwordError}</Text> : <View style={styles.noerror}></View>}

              <CustomButton
                title="Login"
                style={{ marginTop: 5 }}
                textStyle={{ fontWeight: '700' }}
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
                textStyle={{ fontWeight: '700' }}
                borderRadius={50}
                backgroundColor={colors.white}
                textColor={colors.black}
              />
              
              <View style={styles.footer}>
                <Text style={styles.bytext}>Don't have an account?</Text>
                <View>
                  <Text onPress={() => navigation.navigate('SignUp')} style={styles.termstext}>
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
            <TouchableWithoutFeedback onPress={() => { setModalVisible(false); setResetEmailError(''); }}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Reset Your Password</Text>
                  <Text style={styles.modalText}>
                    Enter your email and you may receive a link to reset your password.
                  </Text>
                  <TextInput
                    style={styles.modalInput}
                    placeholder="Enter your email"
                    value={resetEmail}
                    onChangeText={text => {
                      setResetEmail(text);
                      setResetEmailError('');
                    }}
                    autoCapitalize="none"
                  />
                  {resetEmailError ? <Text style={styles.error}>{resetEmailError}</Text> : <View style={styles.noerror}></View>}
                  <View style={styles.modalButtons}>
                    <CustomButton
                      title="Reset"
                      style={{ marginTop: 5 }}
                      textStyle={{ fontWeight: '500' }}
                      borderRadius={5}
                      backgroundColor={colors.reddish}
                      textColor={colors.white}
                      onPress={handleForgotPassword}
                      padding={vh(10)}
                    />
                    <CustomButton
                      title="Cancel"
                      style={{ marginTop: 5 }}
                      textStyle={{ fontWeight: '500' }}
                      borderRadius={5}
                      backgroundColor={colors.grey}
                      textColor={colors.white}
                      onPress={() => { setModalVisible(false); setResetEmailError(''); }}
                      padding={vh(10)}
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default MailLogin;
