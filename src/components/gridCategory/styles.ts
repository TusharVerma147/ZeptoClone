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
      backgroundColor: colors.lightpurple,
      height: width / 1.9,
      width: width / 2.2,
      borderRadius: 10,
      paddingVertical: 10,
      alignItems: 'center',
      marginHorizontal: 5,
    },
    itemimage: {
      borderRadius: 10,
      resizeMode: 'contain',
      backgroundColor: colors.lightpurple,
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