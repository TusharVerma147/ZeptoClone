import { StyleSheet,} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.white
    },
    noorder:{
      justifyContent:'center',
      alignItems:'center',
      flex:1
    },
    noordertext:{
       fontSize:20,
       fontWeight:'800'
    },
    orderContainer: {
      flex:1,
      marginVertical:10,
      marginHorizontal:20,
      padding: 10,
      borderWidth: 1,
      borderColor: colors.purple,
      borderRadius: 8,
      backgroundColor:colors.lightpurple
    },
    orderTitle: {
      fontSize: 15,
      fontWeight: '500',
      marginVertical:5,
      color:colors.purple
    },
    details:{
    marginVertical:10,
    fontSize:15,
    color:colors.violet
    },
    productImagesRow: {
      flexDirection: 'row',
      marginBottom: 10,
      flexWrap: 'wrap', 
    },
    productImage: {
      width: 50, 
      height: 50, 
      marginRight: 10,
      borderRadius: 5, 
    },
    total:{
      fontWeight:'600',
      marginVertical:5,
      fontSize:15,
      color:colors.purple
    }
  });

  export default styles