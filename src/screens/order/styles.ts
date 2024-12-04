import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors';
import {Image} from 'react-native-reanimated/lib/typescript/Animated';
import {vh} from '../../utils/dimensions';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: colors.lightpurple,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  starview: {flex: 0.5, justifyContent: 'center'},
  star: {
    height: width / 2,
    width: width / 2,
    resizeMode: 'contain',
  },
  tick: {
    position: 'absolute',
    marginHorizontal: vh(45),
    height: width / 4,
    width: width / 4,
    resizeMode: 'contain',
  },
  ticktext: {
    position: 'absolute',
    fontSize: 100,
    color: colors.white,
    marginHorizontal: vh(50),
  },
  subtext: {flex: 0.5, paddingHorizontal: 50},
  deliverytext: {
    color: colors.violet,
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: vh(50),
    fontWeight: '400',
    textAlign: 'center',
  },
  payment: {
    color: colors.violet,
    fontSize: 30,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default styles;
