import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Login from '../screens/login';
import Home from '../screens/home';
import Details from '../screens/details';

const Stack =createNativeStackNavigator()

const StackRoute = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    initialRouteName='Splash'>
        <Stack.Screen name='Splash'  component={Splash}/>
        <Stack.Screen name='Login'  component={Login}/>
        <Stack.Screen name='Home'  component={Home}/>
        <Stack.Screen name='Details'  component={Details}/>
    </Stack.Navigator>
  )
}

export default StackRoute 