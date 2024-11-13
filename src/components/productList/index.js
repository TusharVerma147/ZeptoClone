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
const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/f/f0/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006_edit_1.jpg';

import FastImage from 'react-native-fast-image';

const ProductList = ({data}) => {
  const renderProducts = ({item, index}) => {
    return (
      <View style={styles.renderproduct}>
        <Image source={{uri: item.image}} style={styles.itemimage} />
        {/* <View style={{height:50,width:50}} > */}
        {/* <Image resizeMode='contain' source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfF1f7rX94ZhU2cAgYKQPDqeuNcBtR9td4Q&s"}} style={{height:'100%',width:'100%'}}/> */}
        {/* </View> */}
        {/* <Image source={Icons.ban6}/> */}
        {/* <Image source={{uri: 'https://plus.unsplash.com/premium_photo-1688678097958-0620a452f0e8?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={styles.itemimage}/> */}
        {/* <Image key={imageUrl} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006_edit_1.jpg'}} style={{ resizeMode: 'cover', width: '100%', height: '100%' }}/> */}

        {/* <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}


    /> */}

        {/* <Image
          style={styles.itemimage}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        /> */}

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
