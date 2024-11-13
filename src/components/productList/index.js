import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import {Icons} from '../../assets';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const ProductList = ({data}) => {
  const renderProducts = ({item, index}) => {
    return (
      <View style={styles.renderproduct}>
        <Image source={{uri: item.image}} style={styles.itemimage} />
        <View style={styles.name}>
          <Text numberOfLines={1} style={styles.des}>
            {item.name}
          </Text>
          <Text style={styles.des}>{item.grams}g</Text>
          <View style={styles.subrender}>
            <View>
              <Text style={styles.strikethroughText}>₹{item.price}</Text>
              <Text style={styles.price}>₹{item.discounted}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flat}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separate}></View>}
        data={data}
        renderItem={renderProducts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 1,
  },
  separate: {
    width: 10,
  },
  flat: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  renderproduct: {
    backgroundColor: 'white',
    height: width / 2,
    width: width / 3.3,
    borderRadius: 10,
    shadowColor: '#000',
     shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  itemimage: {
    flex: 0.5,
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor:colors.white
    // backgroundColor: 'red',
    // height:50,
    // width:50
  },
  name: {
    flex: 0.4,
    paddingHorizontal: 10,
  },
  subrender: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  des: {
    fontSize: 15,
    fontWeight: '400',
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
});
export default ProductList;
