import React from 'react';
import { Text, View, SectionList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { Icons } from '../../assets';
import AppHeader from '../../components/appHeader';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native'; 


type SettingsProps = {
  navigation: {
    reset: (options: { index: number, routes: { name: string }[] }) => void;
  };
};

type DataItem = {
  title: string;
  data: any[];
  image: any;
};

const DATA: DataItem[] = [

    {
    title: 'Orders',
    data: [],
    image: Icons.bag
  },
  {
    title: 'Customer Support & FAQ',
    data: [],
    image: Icons.faqs,
  },

  //   {
  //   title: 'Addresses',
  //   data: [],
  //   image: Icons.location
  // },
  {
    title: 'Refunds',
    data: [],
    image: Icons.refund,
  },
  {
    title: 'Rewards',
    data: [],
    image: Icons.gifts,
  },
  {
    title: 'Suggest Products',
    data: [],
    image: Icons.new,
  },
  {
    title: 'General Info',
    data: [],
    image: Icons.info,
  },
];

const Settings: React.FC<SettingsProps> = ({ navigation }) => {
  const navigate = useNavigation();

  const handleLogout = async () => {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem('key');
      navigation.reset({
        index: 0,
        routes: [{ name: 'MailLogin' }],
      });
      Toast.showWithGravity('Logged out successfully', Toast.SHORT, Toast.BOTTOM, {
        backgroundColor: colors.reddish,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePressItem = (title: string) => {
    if (title === 'Customer Support & FAQ') {
      navigate.navigate('Chat'); 
    }
    if (title === 'Suggest Products') {
      navigate.navigate('BottomTab', {screen: 'Category'}); 
    }
    if (title === 'Orders') {
      navigate.navigate('OrderHistory'); 
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader title={'Settings'} />
      <SectionList
        sections={DATA}
        bounces={false}
        keyExtractor={(item, index) => item + index}
        renderItem={() => null}
        renderSectionHeader={({ section: { title, image } }: { section: DataItem }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePressItem(title)}>
            <Image source={image} style={styles.img} />
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.log}>
        <TouchableOpacity onPress={handleLogout} style={styles.logbutton}>
          <Text style={styles.logText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

