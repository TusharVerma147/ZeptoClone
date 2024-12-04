import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.violet,
      justifyContent: 'center',
      alignItems: 'center',
    },
    splashicon: {
      width: responsiveWidth(100),
      height: 400,
      resizeMode:'contain'
    },
  });

  export default styles;