import {StyleSheet, Dimensions} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import colors from '../../theme/colors';
import {vh} from '../../utils/dimensions';
const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
   space:{
      flex:1
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
      marginTop:10,
    },
    error: {
      color: colors.zeptored,
      fontSize:responsiveFontSize(1.8),
      height: vh(18),
    },
    noerror:{
      height:width/25
    },
    clock: {
      height: 30,
      width: 25,
      resizeMode: 'contain',
      marginHorizontal: 5,
      tintColor: colors.purple,
      marginRight:10
    },
  });

  export default styles
