import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../theme/colors';
import AppHeader from '../../components/appHeader';
import { Icons } from '../../assets';
import CustomButton from '../../components/customButton';
import styles from './styles';


type NavigationType = {
  navigate: (screen: string) => void;
};

const Order: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  const gotoBottom = ()=> {
    navigation.navigate('BottomTab')
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <AppHeader
        backgroundColor={colors.violet}
        uppercolor={colors.violet}
        backcolor={colors.white}
      />

      <View style={styles.main}>
        <View style={styles.starview}>
          <Image source={Icons.star} style={styles.star} />
          <Text style={styles.ticktext}>✓</Text>
        </View>
        <Text style={styles.payment}>Payment Successful</Text>
        <View style={styles.subtext}>
          <Text style={styles.deliverytext}>
            We've accepted your order and it will be delivered by our delivery partner
            within 10 minutes.
          </Text>
          <CustomButton
            backgroundColor={colors.reddish}
            title="Continue Shopping"
            textColor={colors.white}
            borderRadius={10}
            onPress={gotoBottom}
          />
        </View>
      </View>
    </View>
  );
};

export default Order;
