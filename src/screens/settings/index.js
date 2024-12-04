import React from 'react';
import {StyleSheet, Text, View, SectionList, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import auth from '@react-native-firebase/auth'; 
import colors from '../../theme/colors';
import { Icons } from '../../assets';
import AppHeader from '../../components/appHeader';
import styles from './styles';

const DATA = [
  {
    title: 'Orders',
    data: [],
    image: Icons.bag
  },
  {
    title: 'Customer Support & FAQ',
    data: [],
    image: Icons.faqs
  },
  {
    title: 'Addresses',
    data: [],
    image: Icons.location
  },
  {
    title: 'Refunds',
    data: [],
    image: Icons.refund
  },
  {
    title: 'Rewards',
    data: [],
    image: Icons.gifts
  },
  {
    title: 'Suggest Products',
    data: [],
    image: Icons.new
  },
  {
    title: 'General Info',
    data: [],
    image: Icons.info
  },
  {
    title: 'Profile',
    data: [],
    image: Icons.account
  },
];

const Settings = ({ navigation }) => {

  const handleLogout = async () => {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem('key'); 
     navigation.reset({
        index: 0,
        routes: [{ name: 'MailLogin' }]
   })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader title={'Settings'}/>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={() => null}
        renderSectionHeader={({section: {title, image}}) => (
          <View style={styles.item}>
            <Image source={image} style={styles.img} />
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      />
      <View style={styles.log}>
        <TouchableOpacity 
          onPress={handleLogout} 
          style={{
            borderColor: colors.lightgrey,
            backgroundColor: colors.white,
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 20
          }} 
        >
          <Text style={styles.logText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default Settings;