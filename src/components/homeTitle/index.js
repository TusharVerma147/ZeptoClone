import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import styles from './styles';

const HomeTitles = ({
  title,
  subtitle,
  onSubtitlePress,
  iconSource,
  titleColor,
  subtitleColor,
  titleFontSize = 22,
  titleFontWeight = '700', 
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {
            color: titleColor || colors.black,
            fontSize: titleFontSize, 
            fontWeight: titleFontWeight, 
          },
        ]}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={onSubtitlePress} style={styles.subtitleview}>
        <Text style={[styles.subtitle, { color: subtitleColor || colors.reddish }]}>
          {subtitle}
        </Text>
        {iconSource && <Image source={iconSource} style={styles.icon} />}
      </TouchableOpacity>
    </View>
  );
};



export default HomeTitles;
