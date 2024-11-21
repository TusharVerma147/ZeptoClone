import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Icons, Images} from '../../assets';
import colors from '../../theme/colors';

const AppHeader = ({
  title,
  backgroundColor = '#fff',
  showBackIcon = true,
  titleColor = '#000',
  alignment= 'center'
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header, {backgroundColor}]}>
      {showBackIcon && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Icons.left} style={styles.back} />
        </TouchableOpacity>
      )}
      <Text style={[styles.categorytext, {color: titleColor, textAlign:alignment}]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgrey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 50,
    paddingBottom: 20,
  },
  back: {
    height: 30,
    width: 30,
  },
  categorytext: {
    fontSize: 25,
    fontWeight: '600',
    flex: 1,
    textAlign:''
  },
});

export default AppHeader;
