import {  StyleSheet,  } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white, 
      paddingTop: 20,
      paddingHorizontal: 15,
      justifyContent: 'flex-end',
    },
    scrollViewContent: {
      paddingBottom: 20, 
    },
    messageContainer: {
      marginVertical: 5,
      maxWidth: '80%', 
      padding: 10,
      borderRadius: 12,
    },
    sender: {
      alignSelf: 'flex-end', 
      backgroundColor: colors.lightgrey, 
    },
    receiver: {
      alignSelf: 'flex-start', 
      backgroundColor: colors.greyish 
    },
    message: {
      fontSize: 14,
      color: colors.black, 
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    textInput: {
      flex: 1,
      height: 50,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: colors.lightgrey,
      paddingLeft: 15,
      marginRight: 10,
    },
  });

  export default styles;