import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import colors from '../../theme/colors';
import {Icons} from '../../assets';
import AppHeader from '../../components/appHeader';
import HomeTitles from '../../components/homeTitle';
import CustomButton from '../../components/customButton';
import Toast from 'react-native-simple-toast';
import styles from './styles';

interface PaymentRouteParams {
  totalAmount: number;
}

type PaymentScreenRouteProp = RouteProp<
  {Payment: PaymentRouteParams},
  'Payment'
>;

interface PaymentProps {
  navigation: any;
}

const Payment: React.FC<PaymentProps> = ({navigation}) => {
  const route = useRoute<PaymentScreenRouteProp>();
  const {totalAmount} = route.params;
  console.log('total ---->', totalAmount);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [isTickVisible, setIsTickVisible] = useState<boolean>(false);

  const handlePaymentPress = () => {
    setIsButtonVisible(true);
  };

  const handleTickPress = () => {
    setIsTickVisible(!isTickVisible);
    if (isButtonVisible && !isTickVisible) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(!isButtonVisible);
    }
  };

  const handleClicktoPay = () => {
    Toast.showWithGravity('Payment Successful', Toast.SHORT, Toast.BOTTOM, {
      backgroundColor: colors.reddish,
    });
    navigation.navigate('Order');
  };

  return (
    <View style={[styles.container]}>
      <AppHeader
        title={'Payment Options'}
        subtitle={'To Pay:'}
        payColor={colors.grey}
        moneytitle={`₹${totalAmount}`}
        moneycolor={'green'}
        titlesize={18}
        backWidth={25}
        backheight={25}
      />
      <View style={styles.addressview}>
        <Image style={styles.location} source={Icons.location} />
        <Text style={styles.addresstext}>Delivering to Appinventiv</Text>
      </View>
      <ScrollView>
        <HomeTitles
          title={'Pay by UPI'}
          titleFontWeight="500"
          titleFontSize={18}
        />
        <View style={styles.paymentview}>
          <View style={styles.upisub}>
            <Image source={Icons.upi} style={styles.upi} />
            <Text style={styles.upitext}>Pay by any UPI app</Text>
          </View>
          <View style={styles.sub}>
            <View>
              <TouchableOpacity onPress={handlePaymentPress}>
                <Image source={Icons.gpay} style={styles.pay} />
              </TouchableOpacity>
              <Text style={styles.paytext}>GPay</Text>
            </View>
            <View>
              <TouchableOpacity onPress={handlePaymentPress}>
                <Image source={Icons.phonepe} style={styles.pay} />
              </TouchableOpacity>
              <Text style={styles.paytext}>PhonePe</Text>
            </View>
            <View>
              <TouchableOpacity onPress={handlePaymentPress}>
                <Image source={Icons.paytm} style={styles.pay} />
              </TouchableOpacity>
              <Text style={styles.paytext}>Paytm</Text>
            </View>
          </View>
        </View>

        <HomeTitles
          title={'Netbanking'}
          titleFontWeight="500"
          titleFontSize={18}
        />
        <View style={styles.paymentview}>
          <View style={styles.sub1}>
            <View>
              <TouchableOpacity onPress={handlePaymentPress}>
                <Image source={Icons.sbi} style={styles.pay} />
              </TouchableOpacity>
              <Text style={styles.paytext}>SBI</Text>
            </View>
            <View>
              <TouchableOpacity onPress={handlePaymentPress}>
                <Image source={Icons.hdfc} style={styles.pay} />
              </TouchableOpacity>
              <Text style={styles.paytext}>HDFC</Text>
            </View>
            <View>
              <TouchableOpacity onPress={handlePaymentPress}>
                <Image source={Icons.ici} style={styles.pay} />
              </TouchableOpacity>
              <Text style={styles.paytext}>ICICI</Text>
            </View>
            <View>
              <TouchableOpacity onPress={handlePaymentPress}>
                <Image source={Icons.axis} style={styles.pay} />
              </TouchableOpacity>
              <Text style={styles.paytext}>Axis</Text>
            </View>
          </View>
          <View style={styles.upisub1}>
            <Image source={Icons.bank} style={styles.card} />
            <Text style={styles.upitext}>More Banks</Text>
          </View>
        </View>

        <HomeTitles title={'Cards'} titleFontWeight="500" titleFontSize={18} />
        <View style={styles.paymentview}>
          <View style={styles.upisub}>
            <Image source={Icons.card} style={styles.card} />
            <Text style={styles.upitext}>Credit / Debit Cards</Text>
          </View>
          <View style={styles.sub}>
            <View>
              <TouchableOpacity onPress={handlePaymentPress}>
                <Image source={Icons.visa} style={styles.pay} />
              </TouchableOpacity>
              <Text style={styles.paytext}>Visa</Text>
            </View>
            <View>
              <TouchableOpacity onPress={handlePaymentPress}>
                <Image source={Icons.master} style={styles.pay} />
              </TouchableOpacity>
              <Text style={styles.paytext}>MasterCard</Text>
            </View>
            <View>
              <TouchableOpacity onPress={handlePaymentPress}>
                <Image source={Icons.rupay} style={styles.pay} />
              </TouchableOpacity>
              <Text style={styles.paytext}>RuPay</Text>
            </View>
            <View>
              <TouchableOpacity onPress={handlePaymentPress}>
                <Image source={Icons.paypal} style={styles.pay} />
              </TouchableOpacity>
              <Text style={styles.paytext}>PayPal</Text>
            </View>
          </View>
        </View>

        <HomeTitles
          title={'Pay On Delivery'}
          titleFontWeight="500"
          titleFontSize={18}
        />
        <View style={styles.paymentview}>
          <View style={styles.paymentsubview}>
            <View style={styles.upisub1}>
              <Image source={Icons.cod} style={styles.upi} />
              <Text style={styles.upitext}>Cash On Delivery</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.check,
                {
                  backgroundColor: isTickVisible
                    ? colors.zeptored
                    : colors.white,
                  borderWidth: isTickVisible ? 0 : 1,
                  borderColor: isTickVisible ? 'none' : colors.lightgrey,
                },
              ]}
              onPress={handleTickPress}>
              {isTickVisible && <Text style={styles.tick}>✓</Text>}
            </TouchableOpacity>
          </View>
          <Text style={styles.addresstext}>Pay by Cash/UPI on delivery</Text>
        </View>
      </ScrollView>

      {isButtonVisible && (
        <View style={styles.footerview}>
          <CustomButton
            title="Click to Pay"
            backgroundColor={colors.pink}
            textColor={colors.white}
            borderRadius={15}
            onPress={handleClicktoPay}
          />
        </View>
      )}
    </View>
  );
};

export default Payment;
