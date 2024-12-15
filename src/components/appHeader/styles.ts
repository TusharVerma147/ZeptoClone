import {StyleSheet,  Platform} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    header: {
      borderBottomWidth: 1,
      borderBottomColor: colors.lightgrey,
      paddingHorizontal: 10,
      paddingTop: Platform.OS==="android"?20: 50, 
      paddingBottom: 20,
    },
    backContainer: {
      marginRight: 10,
      marginTop:Platform.OS==="android"?3: 1, 
    },
    back: {
      height: 30,
      width: 30,
    },
    titleContainer: {
      flexDirection: 'row', 
    },
    centeredTitleContainer: {
      justifyContent: 'center', 
    },
    payContainer: {
      flexDirection: 'row', 
      alignItems: 'center',
      marginTop: 5,
      paddingHorizontal:30
    },
    categoryText: {
      fontWeight: '600',
    },
    subtitleText: {
      fontSize: 16,
      marginRight: 5, 
      fontWeight: '500'
    },
    toPayLabel: {
      fontSize: 18,
      fontWeight: '700'
    },
  });
  
 export default styles;