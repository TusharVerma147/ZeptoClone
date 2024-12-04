import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors';

const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.greyy,
    },
    addressview: {
      backgroundColor: colors.white,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    location: {
      height: 30,
      width: 30,
      marginHorizontal: 3,
      tintColor: colors.reddish,
    },
    addresstext: {
      color: colors.grey,
      fontSize: 18,
      fontWeight: '500',
    },
    paymentview: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.lightgrey,
      margin: 10,
      borderRadius: 10,
      padding: 20,
    },
    upi: {
      height: 50,
      width: 50,
      marginHorizontal: 10,
      resizeMode: 'contain',
      borderRadius: 10,
      borderColor: colors.lightgrey,
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    card: {
      height: 50,
      width: 60,
      marginHorizontal: 10,
      resizeMode: 'contain',
      borderRadius: 10,
      borderColor: colors.lightgrey,
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    upisub: {
      flexDirection: 'row',
      borderBottomColor: colors.lightgrey,
      borderBottomWidth: 1,
    },
    upisub1: {
      flexDirection: 'row',
      marginTop: 10,
    },
    sub: {
      flexDirection: 'row',
      marginTop: 10,
    },
    sub1: {
      flexDirection: 'row',
      borderBottomColor: colors.lightgrey,
      borderBottomWidth: 1,
    },
    upitext: {
      fontSize: 17,
      marginHorizontal: 10,
      marginTop: 10,
      fontWeight: '400',
    },
    pay: {
      height: 50,
      width: 50,
      resizeMode: 'contain',
      borderRadius: 10,
      borderColor: colors.lightgrey,
      borderWidth: 1,
      paddingHorizontal: 1,
      marginHorizontal: 10,
    },
    paytext: {
      textAlign: 'center',
      paddingTop: 5,
      paddingBottom: 5,
    },
    footerview: {
      marginTop: 10,
      paddingTop: 20,
      paddingHorizontal: 20,
      paddingBottom: 30,
      paddingVertical: 20,
      backgroundColor: colors.white,
    },
    check: {
      borderRadius: 20,
      backgroundColor: colors.zeptored,
      height: 25,
      width: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tick: {
      fontSize: 15,
      color: colors.white,
    },
    paymentsubview:{
      flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
    }
  });


  export default styles