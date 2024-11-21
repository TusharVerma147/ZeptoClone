import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import colors from '../../theme/colors';

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
      <TouchableOpacity onPress={onSubtitlePress} style={{ flexDirection: 'row' }}>
        <Text style={[styles.subtitle, { color: subtitleColor || colors.reddish }]}>
          {subtitle}
        </Text>
        {iconSource && <Image source={iconSource} style={styles.icon} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 22, 
    fontWeight: '700', 
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  subview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: colors.reddish,
  },
});

export default HomeTitles;
