import { StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.violet,
      paddingHorizontal: 20,
    },
    symbol: {
      width: responsiveWidth(80),
      height: responsiveWidth(60),
      alignSelf: 'center',
    },
    exclude: {
      alignSelf: 'center',
      height: responsiveWidth(50),
      width: responsiveWidth(50),
      resizeMode: 'contain',
    },
    top: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottom: {
      justifyContent: 'center',
      flex: 1,
      marginTop: 85,
    },
    policy: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    footer: {
      margin: 30,
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
  });
  
export default styles;