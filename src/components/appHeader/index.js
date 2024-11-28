import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../assets';
import colors from '../../theme/colors';

const AppHeader = ({
  title,
  backgroundColor = '#fff',
  showBackIcon = true,
  titleColor = '#000',
  payColor = '#000',
  moneycolor = '#000',
  moneytitle,
  subtitle,
  centerTitle = false,
  titlesize =25,
  backWidth=30,
  backheight=30,
  self='center'
}) => {
  const navigation = useNavigation();
  
  return (
    <View style={[styles.header, { backgroundColor }]}>
      <StatusBar  backgroundColor={colors.white}/>
      <View style={[styles.titleContainer, centerTitle && styles.centeredTitleContainer]}>
        {showBackIcon && !centerTitle && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
            <Image source={Icons.left} style={{height:backheight, width:backWidth, alignSelf:self}} />
          </TouchableOpacity>
        )}
        <Text style={[styles.categoryText, { color: titleColor, fontSize:titlesize}]}>{title}
        </Text>
      </View>
      <View style={styles.payContainer}>
        {subtitle && (
          <Text style={[styles.subtitleText, { color: payColor }]}>
            {subtitle}
          </Text>
        )}
        {moneytitle && (
          <Text style={[styles.toPayLabel, { color: moneycolor }]}>
            {moneytitle}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgrey,
    paddingHorizontal: 10,
   paddingTop: Platform.OS==="android"?20: 50, 
    paddingBottom: 20,
  },
  backContainer: {
    marginRight: 10, 
  },
  back: {
    height: 30,
    width: 30,
  },
  titleContainer: {
    flexDirection: 'row', 
  },
  centeredTitleContainer: {
    justifyContent: 'center', 
  },
  payContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal:30
  },
  categoryText: {
    // fontSize: 25,
    fontWeight: '600',
  },
  subtitleText: {
    fontSize: 16,
    marginRight: 5, 
    fontWeight: '500'
  },
  toPayLabel: {
    fontSize: 18,
    fontWeight: '700'
  },
});

export default AppHeader;