import { StyleSheet,} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      marginBottom: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      backgroundColor:colors.white
    },
    orderTitle: {
      fontSize: 15,
      fontWeight: '500',
      marginVertical:5
    },
    details:{
    marginVertical:10,
    color:colors.darkgrey,
    fontSize:15,
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
      fontWeight:'500',
      marginVertical:5,
      fontSize:15
    }
  });

  export default styles