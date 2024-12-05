import React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from '../../assets';
import colors from '../../theme/colors';
import { ScreenNames } from '../screenNames';
import Home from '../../screens/home';
import Category from '../../screens/categories';
import Cart from '../../screens/cart';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case ScreenNames.Home:
              iconName = focused ? Icons.zeptoselect : Icons.zeptounselect;
              break;
            case ScreenNames.Category:
              iconName = focused
                ? Icons.categoryselect
                : Icons.categoryunselect;
              break;
            case ScreenNames.Cart:
              iconName = focused
                ? Icons.shoppingcartselect
                : Icons.shoppingcart;
              break;
            default:
              iconName = Icons.zeptoselect;
              break;
          }
          return (
            <Image
              source={iconName}
              style={{ width: 40, height: 30, resizeMode: 'contain' }}
            />
          );
        },
        tabBarLabel: ({ focused, color }) => {
          let labelStyle = {
            fontSize: 12,
            color: focused ? colors.violet : colors.inactiveTabColor,
            fontWeight: 'bold',
          };

          let labelText;
          switch (route.name) {
            case ScreenNames.Home:
              labelText = 'Zepto';
              break;
            case ScreenNames.Category:
              labelText = 'Categories';
              break;
            case ScreenNames.Cart:
              labelText = 'Cart';
              break;
            default:
              labelText = 'Tab';
              break;
          }

          return <Text style={labelStyle}>{labelText}</Text>;
        },
        tabBarStyle: {
          paddingBottom: 5,
          height: 65,
        },
      })}
    >
      <Tab.Screen
        component={Home}
        name={ScreenNames.Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        component={Category}
        name={ScreenNames.Category}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        component={Cart}
        name={ScreenNames.Cart}
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' }, 
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;