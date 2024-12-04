import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../theme/colors';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white
    },
    item: {
      backgroundColor: colors.white,
      padding: 20,
      borderBottomWidth: 1,
      flexDirection: 'row',
      gap: 10,
      borderBottomColor: colors.lightgrey,
      alignItems: 'center',
      flex: 2
    },
    img: {
      height: 35,
      width: 30,
      tintColor: colors.violet,
      resizeMode: 'contain'
    },
    title: {
      fontSize: 20,
    },
    log: {
      marginVertical: 20, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    logText: {
      color: colors.pink,
      textAlign: 'center',
      padding: 10,
      fontWeight: '500',
      fontSize: 20
    }
  });

  export default styles;