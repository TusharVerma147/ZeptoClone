import { View, Text, TouchableOpacity, Image,  StatusBar } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../assets';
import colors from '../../theme/colors';
import styles from './styles';

const AppHeader = ({
  title,
  backgroundColor = colors.white,
  showBackIcon = true,
  titleColor = colors.black,
  payColor = colors.black,
  moneycolor = colors.black,
  moneytitle,
  subtitle,
  centerTitle = false,
  titlesize =25,
  backWidth=30,
  backheight=30,
  backcolor=colors.black,
  self='center',
  uppercolor= colors.white
}) => {
  const navigation = useNavigation();
  
  return (
    <View style={[styles.header, { backgroundColor}]}>
      <StatusBar  backgroundColor={uppercolor}/>
      <View style={[styles.titleContainer, centerTitle && styles.centeredTitleContainer]}>
        {showBackIcon && !centerTitle && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
            <Image source={Icons.left} style={{height:backheight, width:backWidth, alignSelf:self, tintColor:backcolor}} />
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



export default AppHeader;