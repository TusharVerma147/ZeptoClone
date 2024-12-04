import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors';
const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
    },
    separate: {
      width: 10,
    },
    flat: {
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    renderproduct: {
      backgroundColor: colors.white,
      height: width / 2,
      width: width / 3.3,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 2, height: 6},
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 10,
    },
    itemimage: {
      flex: 0.5,
      borderRadius: 10,
      resizeMode: 'contain',
      backgroundColor: colors.white,
    },
    name: {
      flex: 0.4,
      paddingHorizontal: 10,
    },
    subrender: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    des: {
      fontSize: 15,
      fontWeight: '400',
    },
    strikethroughText: {
      textDecorationLine: 'line-through',
      fontSize: 12,
      color: colors.darkgrey,
    },
    price: {
      fontSize: 15,
      color: colors.violet,
      fontWeight: '500',
    },
    account: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      tintColor: colors.violet,
    },
    cart: {
      // backgroundColor:'red',
      // justifyContent: 'center',
      // alignItems: 'center',
      paddingHorizontal: 10,
      // marginVertical:20,
      paddingVertical: 5,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.pink,
    },
    carttext: {
      color: colors.pink,
      fontWeight: '800',
      fontSize: 16,
    },
    removecart: {
      // justifyContent: 'space-between',
      flexDirection: 'row',
      // paddingHorizontal: 5,
      // marginVertical:20,
      paddingVertical: 5,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.pink,
      backgroundColor: colors.pink,
    },
    removecarttext: {
      color: colors.white,
      fontWeight: '800',
      marginHorizontal: 5,
      fontSize: 16,
    },
  });

  export default styles