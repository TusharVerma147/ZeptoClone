import React from 'react';
import {StyleSheet, Text, View, SectionList, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import auth from '@react-native-firebase/auth'; 
import colors from '../../theme/colors';
import { Icons } from '../../assets';
import AppHeader from '../../components/appHeader';

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
      await AsyncStorage.removeItem('key'); // Remove the value from AsyncStorage
      // navigation.navigate('MailLogin'); // Navigate to the login screen after logout
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
          onPress={handleLogout} // Call handleLogout on press
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  item: {
    backgroundColor: colors.white,
    padding: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    gap: 10,
    borderBottomColor: colors.lightgrey,
    alignItems: 'center',
    flex: 2
  },
  img: {
    height: 35,
    width: 30,
    tintColor: colors.violet,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 20,
  },
  log: {
    marginVertical: 20, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logText: {
    color: colors.pink,
    textAlign: 'center',
    padding: 10,
    fontWeight: '500',
    fontSize: 20
  }
});

export default Settings;