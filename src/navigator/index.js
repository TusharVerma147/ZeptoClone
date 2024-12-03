import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,  useNavigationContainerRef, } from '@react-navigation/native';
import Splash from '../screens/splash';
import Login from '../screens/login';
import Home from '../screens/home';
import Cart from '../screens/cart';
import Details from '../screens/details';
import { ScreenNames } from './screenNames';
import BottomTab from './bottomTab';
import Map from '../screens/map';
import Settings from '../screens/settings';
import MailLogin from '../screens/maillogin';
import SignUp from '../screens/signUp';
import Payment from '../screens/payment';
import Search from '../screens/search';

const Stack =createNativeStackNavigator();

const RootNavigator = () => {

  const navigationRef= useNavigationContainerRef();
  return (
    <NavigationContainer   ref={navigationRef}>
    <Stack.Navigator 
    screenOptions={{headerShown:false,  animation: 'slide_from_right',}}
    initialRouteName={ScreenNames.Splash}>
        <Stack.Screen name={ScreenNames.Splash}  component={Splash}/>
        <Stack.Screen name={ScreenNames.Login}  component={Login}/>
        <Stack.Screen name={ScreenNames.MailLogin}  component={MailLogin}/>
        <Stack.Screen name={ScreenNames.SignUp}  component={SignUp}/>
        <Stack.Screen name={ScreenNames.Details}  component={Details}/>
        <Stack.Screen name={ScreenNames.Cart}  component={Cart}/>
        <Stack.Screen name={ScreenNames.Map}  component={Map}/>
        <Stack.Screen name={ScreenNames.Settings}  component={Settings}/>
        <Stack.Screen name={ScreenNames.Payment}  component={Payment}/>
        <Stack.Screen name={ScreenNames.Search}  component={Search}/>
        <Stack.Screen
            component={BottomTab}
            name={ScreenNames.BottomTab}
            options={{headerShown: false}}
          />

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;