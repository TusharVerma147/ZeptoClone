import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import AppHeader from '../../components/appHeader';
import colors from '../../theme/colors';
import HomeTitles from '../../components/homeTitle';
import GridCategory from '../../components/gridCategory';
import { grocery, beauty, snacks, household } from '../../utils/mockdata/item';
import { CategoryData } from '../../utils/mockdata/item'; 
import styles from './styles';


const Category: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <AppHeader
        title="All Categories"
        backgroundColor={colors.violet}
        titleColor={colors.white}
        showBackIcon={false}
        centerTitle={true}
        uppercolor={colors.violet}
      />
      <ScrollView>
        <View>
          <HomeTitles title={'Grocery & Kitchen'} />
          <GridCategory data={grocery} />
          <HomeTitles title={'Snacks & Drinks'} />
          <GridCategory data={snacks} />
          <HomeTitles title={'Beauty & Personal Care'} />
          <GridCategory data={beauty} />
          <HomeTitles title={'Household Essentials'} />
          <GridCategory data={household} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;
