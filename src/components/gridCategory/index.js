import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';

const GridCategory = ({data}) => {
  const renderGridCategory = ({item, index}) => {
    return (  
      <TouchableOpacity style={styles.renderproduct}>
        <Image source={item.image} style={styles.itemimage} />
        <View style={styles.name}>
          <Text style={styles.des}>{item.name}</Text>
        </View>
      </TouchableOpacity>
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
      />
    </View>
  );
};



export default GridCategory;
