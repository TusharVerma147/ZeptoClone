import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flat: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    margin: 5,
    borderBottomColor: colors.white,
  },
  emptycart: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: width / 10,
  },
  bagempt: {
    height: width / 4,
    width: width / 4,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  emptytext: {
    color: colors.black,
    fontSize: 20,
    margin: 10,
    fontWeight: '700',
  },
  mainview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  itemview: {flexDirection: 'row', gap: 20, alignItems: 'center'},
  cartItemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  cartItemQuantity: {
    fontSize: 14,
    color: colors.darkgrey,
  },
  cartItemPrice: {
    fontSize: 16,
    color: colors.violet,
    fontWeight: '700',
  },
  removecart: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.lightpink,
    backgroundColor: colors.lightpink,
  },
  removecarttext: {
    color: colors.pink,
    fontWeight: '800',
    marginHorizontal: 5,
    fontSize: 16,
  },
  footerview: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.greyy,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-evenly',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pink,
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 50,
  },
  footertext: {
    color: colors.white,
    fontSize: 25,
    fontWeight: '700',
  },
  topay: {
    color: colors.darkgrey,
    fontSize: 15,
  },
  total: {
    color: colors.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  couponview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: '#FAF9F6',
  },
  couponcode: {
    backgroundColor: colors.lightpurple,
    padding: 5,
    maxWidth: 100,
    color: colors.violet,
    borderWidth: 1,
    borderColor: colors.violet,
    borderRadius: 5,
    fontWeight: '600',
  },
  couontext: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
