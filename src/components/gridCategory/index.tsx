import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import styles from './styles';


interface GridCategoryItem {
  name: string;
  image: any; 
}

interface GridCategoryProps {
  data: GridCategoryItem[];
}

const GridCategory: React.FC<GridCategoryProps> = ({ data }) => {
  
  const renderGridCategory = ({ item, index }: ListRenderItemInfo<GridCategoryItem>) => {
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
        ItemSeparatorComponent={() => <View style={styles.separate}></View>}
        numColumns={2}
        data={data}
        renderItem={renderGridCategory}
      />
    </View>
  );
};

export default GridCategory;
