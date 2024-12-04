import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../theme/colors';

const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
    search: {
      marginHorizontal: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: 'grey',
      paddingHorizontal: 10,
      marginVertical: Platform.OS==="ios" ? 10: 0,
    },
    searchInput: {
      padding: 15,
      fontSize: 20,
      color: colors.black,
      flex: 1,
    },
    searchicon: {
      height: 30,
      width: 30,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    itemImage: {
      width: 100,
      height: 60,
      borderRadius: 5,
      marginRight: 20,
      resizeMode: 'contain',
   },
    itemName: {
      fontSize: 20,
      color: colors.black,
    },
    noResults: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: colors.grey,
    },
  });

  export default styles;