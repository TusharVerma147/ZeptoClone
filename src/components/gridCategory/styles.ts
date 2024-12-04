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
    flat: {
      //   paddingVertical: 10,
      //   paddingHorizontal: 10,
    },
    renderproduct: {
      // backgroundColor: colors.white,
      backgroundColor: '#fcecfa',
      // backgroundColor:'yellow',
      height: width / 1.9,
      width: width / 2.2,
      borderRadius: 10,
      paddingVertical: 10,
      alignItems: 'center',
      marginHorizontal: 5,
      // shadowColor: '#000',
      //  shadowOffset: { width: 2, height: 6 },
      // shadowOpacity: 0.5,
      // shadowRadius: 2,
      // borderWidth:1
    },
    itemimage: {
      //   flex:0.9,
      borderRadius: 10,
      resizeMode: 'contain',
      backgroundColor: '#fcecfa',
      //   backgroundColor: 'red',
      height: width / 3,
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
      fontSize: 18,
      fontWeight: '600',
      marginTop: 10,
      color: colors.violet,
      textAlign: 'center',
    },
  });

  export default styles