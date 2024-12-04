import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';
import AppHeader from '../../components/appHeader';
import {Icons} from '../../assets';
import CustomButton from '../../components/customButton';
import styles from './styles';

const Order = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <AppHeader
        backgroundColor={colors.violet}
        uppercolor={colors.violet}
        backcolor={colors.white}
      />

      <View
        style={styles.main}>
        <View
          style={styles.starview}>
          <Image source={Icons.star} style={styles.star} />
          <Text style={styles.ticktext}>✓</Text>
        </View>
        <Text style={styles.payment}>Payment Succesfull</Text>
        <View style={styles.subtext}>
          <Text style={styles.deliverytext}>
            We've accepted your order and it will be delivered by our  delivery partner
            within 10 mins
          </Text>
          <CustomButton
            backgroundColor={colors.reddish}
            title="Continue Shopping"
            textColor={colors.white}
            borderRadius={10}
            onPress={() => navigation.navigate('BottomTab')}
          />
        </View>
      </View>
    </View>
  );
};

export default Order;
