import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const OtherProducts = ({data}) => {
  const renderGridCategory = ({item, index}) => {
    return (
      <View style={styles.renderproduct}>
        <Image source={item.image} style={styles.itemimage} />
        <View style={styles.name}>
          <Text numberOfLines={1} style={styles.des}>
            {item.name}
          </Text>
          <Text style={styles.quant}>{item.grams}g</Text>
        </View>
        <View>
          {' '}
          <Text style={styles.strikethroughText}>₹{item.price}</Text>
          <Text style={styles.price}>₹{item.discounted}</Text>
        </View>

        {/* <TouchableOpacity style={styles.cart}>
            <Text style={styles.carttext}>Add to Cart</Text>
        </TouchableOpacity> */}
        <View style={styles.removecart}>

            <Text style={styles.removecarttext}>-</Text>

          <Text style={styles.removecarttextdigit}>1</Text>
   
          <Text style={styles.removecarttext} onPress={''}>
            +
          </Text>
     
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        style={styles.flat}
        ItemSeparatorComponent={() => <View style={styles.separate}></View>}
        numColumns={2}
        data={data}
        renderItem={renderGridCategory}
        // horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  separate: {
    width: 20,
    height: 10,
  },
  flat: {
    //   paddingVertical: 10,
    //   paddingHorizontal: 10,
  },
  renderproduct: {
    //   backgroundColor: '#fcecfa',
    // backgroundColor:'yellow',
    height: width / 1.1,
    width: width / 2.18,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  itemimage: {
    //   flex:0.9,
    borderColor: colors.lightgrey,
    borderWidth: 1,
    borderRadius: 10,
    resizeMode: 'contain',

    // backgroundColor: 'red',
    height: width / 2,
    width: width / 3,
  },
  name: {
    paddingHorizontal: 10,
  },
  subrender: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  des: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  quant: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  strikethroughText: {
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: colors.darkgrey,
  },
  price: {
    fontSize: 15,
    color: colors.violet,
    fontWeight: '500',
  },
  cart: {
    paddingHorizontal: 30,
    marginVertical: 20,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.pink,
  },
  carttext: {
    color: colors.pink,
    fontWeight: '800',
    fontSize: 16,
  },
  removecart: {
    flexDirection: 'row',
    marginVertical: 20,
    borderRadius:4,
    borderWidth: 1,
    borderColor: colors.pink,
    // backgroundColor:'red'
  },
  removecarttext: {
    color: colors.pink,
    fontWeight: '800',
    paddingHorizontal: 10,
    fontSize: 16,
    paddingVertical: 10,
    backgroundColor:colors.lightpink,
    borderRadius:3
  },
  removecarttextdigit: { 
    color: colors.pink,
    fontWeight: '800',
    marginHorizontal: 40,
    fontSize: 16,
    marginVertical: 10,
  },
});

export default OtherProducts;
