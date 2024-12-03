import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import AppWrapper from '../../components/appWrapper';
import colors from '../../theme/colors';
import {Icons} from '../../assets';
import HomeTitles from '../../components/homeTitle';
import GridCategory from '../../components/gridCategory';
import AppHeader from '../../components/appHeader';
import {
  grocery,
  beauty,
  snacks,
  household,
} from '../../utils/mockdata/item';

const Category = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
