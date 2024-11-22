import React from 'react';
import {StyleSheet, Text, View, SectionList, StatusBar, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import { Icons, Images } from '../../assets';
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

const Settings = () => (

    <View style={styles.container}>
      <AppHeader title={'Settings'}/>
      <SectionList
      style={{}}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        // renderItem={({item}) => (
        //   <View style={styles.item}>
        //     <Text style={styles.title}>{item}</Text>
        //   </View>
        // )}
        renderItem={() => null}
        renderSectionHeader={({section: {title, image}}) => (
          <View style={styles.item}>
        <Image source={image} style={styles.img} />
          <Text style={styles.title}>{title}</Text>
          </View>
        )}
      />
<View style={styles.log}>

<TouchableOpacity style={{borderColor: colors.lightgrey,
    backgroundColor: colors.white,borderWidth:1, borderRadius:10, marginBottom:20}} >
          <Text style={styles.logText}>Log Out</Text>
        </TouchableOpacity>
</View>
      

    </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  item: {
    backgroundColor: colors.white,
    padding: 20,
    borderBottomWidth:1,
    flexDirection:'row',
    gap:10,
    borderBottomColor: colors.lightgrey,
    alignItems:'center',
flex:2

  },
  img:{
      height: 35,
      width: 30,
      tintColor:colors.violet,
      resizeMode:'contain'
  },
  header: {
    fontSize: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
  },
  log:{

   marginVertical:20, 
    alignItems:'center',
    justifyContent:'center',
  },
  logText:{
    color: colors.pink,
    textAlign: 'center',
    padding: 10,
    fontWeight:'500',
    fontSize:20
  }
});

export default Settings;