import {StyleSheet, Dimensions} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import colors from '../../theme/colors';
import {vh} from '../../utils/dimensions';
const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.violet,
      paddingHorizontal: 20,
      justifyContent: 'center',
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
      height: vh(300),
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    bottom: {
      flex: 0.8,
    },
    footer: {
      marginTop: vh(40),
    },
    bytext: {
      color: colors.white,
      textAlign: 'center',
      fontSize: responsiveFontSize(2),
      fontWeight: '500',
    },
    termstext: {
      color: colors.zeptored,
      textAlign: 'center',
      fontSize: responsiveFontSize(2),
      fontWeight: '500',
    },
    logintext: {
      color: colors.zeptored,
      fontSize: responsiveFontSize(4),
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: 1.8,
      marginBottom: 10,
    },
    divideview: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: vh(10),
      marginBottom: vh(30),
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
    forgot: {
      color: colors.zeptored,
      fontWeight: '700',
      fontSize: responsiveFontSize(2),
      textAlign: 'right',
      marginTop: 5,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      backgroundColor: colors.greyish,
      borderRadius: 10,
      paddingHorizontal: 20,
      height: width / 1.2,
      paddingVertical: 20,
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    modalText: {
      fontSize: 15,
      marginVertical: 10,
      fontWeight: '400',
      color: colors.black,
    },
    modalInput: {
      height: vh(50),
      borderColor: colors.greyish,
      borderWidth: 1,
      width: '100%',
      marginBottom: 15,
      paddingHorizontal: 10,
      borderRadius: 10,
    },
    modalButtons: {
      marginVertical: 10,
      width: '48%',
      alignSelf: 'center',
    },
  });

  export default styles