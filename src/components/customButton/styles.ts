import {StyleSheet, Dimensions} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import colors from '../../theme/colors';
import { vh } from '../../utils/dimensions';
const windowWidth = Dimensions.get('window').width;

const styles = {
  button: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: vh(15),
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: responsiveFontSize(2.1),
  },
};

export default styles;