import React, {useState, useEffect} from 'react';
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
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import CustomButton from '../../components/customButton';
import colors from '../../theme/colors';
import {vh} from '../../utils/dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Icons} from '../../assets';
import styles from './styles';
import CustomTextInput from '../../components/customTextInput';
import {emailRegex,specialCharacterRegex} from '../../utils/regex';

type NavigationProps = {
  navigate: (screen: string) => void;
  replace: (screen: string) => void;
};

interface MailLoginProps {
  navigation: NavigationProps;
}

const MailLogin: React.FC<MailLoginProps> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [resetEmail, setResetEmail] = useState<string>('');
  const [resetEmailError, setResetEmailError] = useState<string | null>(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '618497774501-knq282thiio2qdckfsnpr5d88lj5a08t.apps.googleusercontent.com',
      offlineAccess: true,
    });

    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        // console.log('User is signed in: ', user);
        // Toast.show('User is  signed in', Toast.SHORT);
        navigation.replace('BottomTab');
      } else {
        // Toast.show('User is not signed in', Toast.SHORT);
      }
    });

    return () => subscriber();
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
      // console.error(error);
      Alert.alert('Error signing in: ', error.message);
    }
  };

  const validateLogin = () => {
    let flag = true;
    if (!email || !password) {
      Alert.alert('Please fill the user credentials');
      return;
    }


    if (!specialCharacterRegex.test(password)) {
      setPasswordError('Password must contain at least one special symbol');
      flag = false;
    } else {
      setPasswordError(null);
    }

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
      Toast.show('Password reset email sent!', Toast.SHORT);
      setModalVisible(false);
      setResetEmail('');
    } catch (error: any) {
      console.log('Error sending reset email:', error);
      setResetEmailError('Error sending reset password email');
    }
  };

  const gotoSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.violet} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboard}>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scroll}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <Image style={styles.symbol} source={Icons.zeptooo} />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.logintext}>Sign in</Text>
              <CustomTextInput
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  setEmailError('');
                }}
                placeholder="Email"
                icon={Icons.mail}
                errorMessage={emailError}
              />

              <CustomTextInput
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  setPasswordError('');
                }}
                placeholder="Password"
                icon={Icons.pass}
                secureTextEntry={!passwordVisible}
                onIconPress={togglePasswordVisibility}
                errorMessage={passwordError}
              />

              <CustomButton
                title="Login"
                style={styles.custombutton}
                textStyle={{fontWeight: '700'}}
                borderRadius={50}
                backgroundColor={colors.reddish}
                textColor={colors.white}
                onPress={validateLogin}
              />

              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.forgot} >Forgot Password?</Text>
              </TouchableOpacity>

              <View style={styles.divideview}>
                <View style={styles.orview}></View>
                <Text style={styles.ortext}>or</Text>
                <View style={styles.orview}></View>
              </View>

              <CustomButton
                icon={Icons.google}
                title="Sign in with Google"
                onPress={onGoogleButtonPress}
                textStyle={{fontWeight: '700'}}
                borderRadius={50}
                backgroundColor={colors.white}
                textColor={colors.black}
              />

              <View style={styles.footer}>
                <Text style={styles.bytext}>Don't have an account?</Text>
                <View>
                  <Text onPress={gotoSignUp} style={styles.termstext}>
                    Sign Up
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(false);
            setResetEmailError('');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Reset Your Password</Text>
              <Text style={styles.modalText}>
                Enter your email and you may receive a link to reset your
                password.
              </Text>
              <CustomTextInput
                value={resetEmail}
                onChangeText={text => {
                  setResetEmail(text);
                  setResetEmailError('');
                }}
                placeholder="Enter your email"
                // icon={Icons.mail}
                errorMessage={resetEmailError}
              />
              <View style={styles.modalButtons}>
                <CustomButton
                  title="Reset"
                  style={styles.custombutton}
                  textStyle={{fontWeight: '500'}}
                  borderRadius={5}
                  backgroundColor={colors.reddish}
                  textColor={colors.white}
                  onPress={handleForgotPassword}
                  padding={vh(10)}
                />
                <CustomButton
                  title="Cancel"
                  style={styles.custombutton}
                  textStyle={{fontWeight: '500'}}
                  borderRadius={5}
                  backgroundColor={colors.grey}
                  textColor={colors.white}
                  onPress={() => {
                    setModalVisible(false);
                    setResetEmailError('');
                  }}
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
