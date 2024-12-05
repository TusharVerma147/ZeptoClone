import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors';
const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container:{
    flex:1, backgroundColor:colors.white
  }
})

export default styles;