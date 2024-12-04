import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      marginTop: 15,
      alignItems: 'center',
    },
    title: {
      fontSize: 22, 
      fontWeight: '700', 
    },
    subtitleview:{ flexDirection: 'row' },
    subtitle: {
      fontSize: 18,
      fontWeight: '600',
    },
    subview: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 20,
      height: 20,
      tintColor: colors.reddish,
    },
  });

  export default styles