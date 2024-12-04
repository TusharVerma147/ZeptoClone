import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
      paddingHorizontal: 8,
    },
    separate: {
      width: 20,
      height: 10,
    },
    renderproduct: {
      height: width / 1.1,
      width: width / 2.18,
      borderRadius: 10,
      paddingVertical: 10,
      alignItems: 'center',
      marginHorizontal: 5,
    },
    itemimage: {
      borderColor: colors.lightgrey,
      borderWidth: 1,
      borderRadius: 10,
      resizeMode: 'contain',
      height: width / 2,
      width: width / 3,
    },
    name: {
      paddingHorizontal: 10,
    },
    subrender: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    des: {
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
    },
    quant: {
      fontSize: 15,
      fontWeight: '600',
      textAlign: 'center',
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
    cart: {
      paddingHorizontal: 30,
      marginVertical: 20,
      paddingVertical: 10,
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
      flexDirection: 'row',
      marginVertical: 20,
      borderRadius:4,
      borderWidth: 1,
      borderColor: colors.pink,
    },
    removecarttext: {
      color: colors.pink,
      fontWeight: '800',
      paddingHorizontal: 10,
      fontSize: 16,
      paddingVertical: 10,
      backgroundColor:colors.lightpink,
      borderRadius:3
    },
    removecarttextdigit: { 
      color: colors.pink,
      fontWeight: '800',
      marginHorizontal: 40,
      fontSize: 16,
      marginVertical: 10,
    },
  });

  export default styles;