import {StyleSheet, Dimensions} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import colors from '../../theme/colors';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  headerparent: {
    paddingTop: width / 25,
  },

  header: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 30,
    alignItems: 'center',
    paddingVertical: 10,
  },
  account: {
    height: 60,
    width: 60,
    tintColor: colors.violet,
  },
  delivery: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliverytext: {
    color: colors.black,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    marginLeft: 10,
  },
  min: {
    color: colors.violet,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    marginLeft: 3,
  },
  address: {
    color: colors.black,
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 20,
  },
  location: {
    height: 200,
    width: 200,
  },
  locationtext: {
    color: colors.black,
    fontSize: responsiveFontSize(2.7),
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 10,
    marginBottom: responsiveHeight(2),
  },
  locationsubtext: {
    color: colors.black,
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
  },
  search: {
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'grey',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchicon: {
    height: 20,
    width: 20,
  },
  searchInput: {
    padding: 15,
    fontSize: 15,
    color: colors.black,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  banner: {
    width: width - 20,
    height: width / 2,
    resizeMode: 'stretch',
    borderRadius: 20,
    alignSelf: 'center',
  },
  flat: {
    marginTop: 10,
  },
  freshdeal: {
    width: width,
    height: width / 2,
  },
  caraouselimageview:{
    alignItems:'center'
  }
});

export default styles;
