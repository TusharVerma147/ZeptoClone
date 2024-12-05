import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
    responsiveFontSize,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import colors from '../../theme/colors';
import  {vh} from '../../utils/dimensions';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.violet,
      paddingHorizontal: 20,
      justifyContent: 'center',
      paddingTop:10
    },
    keyboard:{
      flex:1
    },
    header: {
      flex: 0.5,
    },
    scroll:{
      flexGrow:1
    },
    symbol: {
      width: width / 1.5,
      height: vh(170),
      alignSelf: 'center',
      resizeMode: 'contain',
      marginBottom:10,
    },
    bottom: {
      flex: 0.8,
    },
    input: {
      height: vh(50),
      borderColor: colors.white,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      color: colors.black,
      backgroundColor: colors.white,
      flexDirection: 'row',
      alignItems: 'center',
    },
    error: {
      color: colors.zeptored,
      fontSize: responsiveFontSize(1.8),
      height: vh(28),
      marginTop: 0.4,
    },
    noerror:{
      height:width/20
    },
    policy: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    footer: {
      marginTop: vh(100),
      flex:1
    },
    bytext: {
      color: colors.white,
      textAlign: 'center',
      fontSize: responsiveFontSize(2),
      fontWeight: '500',
    },
    termstext: {
      color: colors.reddish,
      textAlign: 'center',
      fontSize: responsiveFontSize(2),
      fontWeight: '500',
    },
    andtext: {
      color: colors.white,
      textAlign: 'center',
      fontSize: responsiveFontSize(2),
      fontWeight: '500',
      marginHorizontal: 3,
    },
    exclude: {
      alignSelf: 'center',
      height: responsiveWidth(50),
      width: responsiveWidth(50),
      resizeMode: 'contain',
    },
    clock: {
      height: 30,
      width: 25,
      resizeMode: 'contain',
      marginHorizontal: 5,
      tintColor: colors.purple,
    },
    logintext: {
      color: colors.zeptored,
      fontSize: responsiveFontSize(4),
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: 1.8,
      marginBottom: vh(10),
    },
    divideview: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: vh(20),
    },
    orview: {
      height: 1,
      width: width / 2.5,
      backgroundColor: colors.zeptored,
      marginHorizontal: 5,
    },
    ortext: {
      fontSize: responsiveFontSize(2),
      color: colors.white,
    },
  });
export default styles;