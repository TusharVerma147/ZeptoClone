import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../../theme/colors';
import {vh} from '../../utils/dimensions';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.violet,
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingTop: 10,
  },
  keyboard: {
    flex: 1,
  },
  header: {
    flex: 0.5,
  },
  scroll: {
    flexGrow: 1,
  },
  symbol: {
    width: width / 1.5,
    height: vh(170),
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bottom: {
    flex: 0.8,
  },
  policy: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footer: {
    marginTop: vh(90),
    flex: 1,
  },
  bytext: {
    color: colors.white,
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  termstext: {
    color: colors.reddish,
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  andtext: {
    color: colors.white,
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    marginHorizontal: 3,
  },
  exclude: {
    alignSelf: 'center',
    height: responsiveWidth(50),
    width: responsiveWidth(50),
    resizeMode: 'contain',
  },
  custombutton:{
    marginTop:10
  },
  logintext: {
    color: colors.zeptored,
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 1.8,
    marginBottom: vh(10),
  },
  divideview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: vh(20),
  },
  orview: {
    height: 1,
    width: width / 2.5,
    backgroundColor: colors.zeptored,
    marginHorizontal: 5,
  },
  ortext: {
    fontSize: responsiveFontSize(2),
    color: colors.white,
  },
});
export default styles;
