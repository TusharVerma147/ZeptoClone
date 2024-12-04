import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.greyish,
    },
    imageview: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      paddingVertical: 10,
    },
    itemimage: {
      borderRadius: 10,
      resizeMode: 'contain',
      height: width / 2,
      width: width / 1.5,
    },
    nameview: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: colors.white,
    },
    name: {
      fontSize: 23,
      fontWeight: '500',
      paddingVertical: 10,
    },
    timeview: {
      flexDirection: 'row',
      borderRadius: 10,
      backgroundColor: '#edecec',
      alignItems: 'center',
      paddingVertical: 3,
      width: width / 4.5,
    },
    clock: {
      height: 20,  
      width: 20,
      marginHorizontal: 3,
    },
    timetext: {
      fontSize: 15,
      fontWeight: '500',
    },
    des: {
      fontSize: 15,
      fontWeight: '400',
      marginVertical: 2,
    },
    strikethroughText: {
      textDecorationLine: 'line-through',
      fontSize: 12,
      color: colors.darkgrey,
      marginVertical: 2,
    },
    price: {
      fontSize: 15,
      color: colors.violet,
      fontWeight: '700',
      marginVertical: 2,
    },
    add: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    productview: {
      flexDirection: 'row',
      width: width,
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: 10,
      paddingVertical: 10,
      backgroundColor: colors.white,
      alignItems:'center'
    },
    producttext: {
      fontSize: 23,
      fontWeight: '500',
    },
    desview: {
      width: width,
      paddingHorizontal: 20,
      backgroundColor: colors.white,
      paddingVertical: 10,
    },
    productDescription: {
      color: colors.darkgrey,
      fontSize: 20,
      fontWeight: '300',
    },
    footerview: {
      backgroundColor: colors.white,
      paddingTop: 10,
    },
    footer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.pink,
      marginBottom: 20,
      paddingVertical: 20,
      marginHorizontal: 10,
      borderRadius: 10,
      flexDirection: 'row',
    },
    footertext: {
      color: colors.white,
      fontSize: 20,
      fontWeight: '700',
    },
    likeview: {
      width: width,
      backgroundColor: colors.white,
      marginTop: 10,
      marginBottom: 10,
    },
    addtocart: {
      backgroundColor: colors.pink,
      borderRadius: 4,
      paddingHorizontal: 20,
      paddingVertical: 7,
    },
    addtocarttext: {
      color: colors.white,
      fontSize: 16,
      fontWeight: '800',
    },
    removetocart: {
      flexDirection: 'row',
      backgroundColor: colors.pink,
      borderRadius: 4,
      paddingVertical: 7,
      justifyContent: 'space-between',
    },
    removetocarttext: {
      color: colors.white,
      fontSize: 16,
      fontWeight: '800',
      paddingHorizontal: 8,
    },
  });

  export default styles;