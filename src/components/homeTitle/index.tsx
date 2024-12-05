import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageSourcePropType, TextStyle } from 'react-native';
import colors from '../../theme/colors';
import styles from './styles';


interface HomeTitlesProps {
  title: string;
  subtitle?: string;
  onSubtitlePress?: () => void;
  iconSource?: ImageSourcePropType; 
  titleColor?: string;
  subtitleColor?: string;
  titleFontSize?: number;
  titleFontWeight?: TextStyle['fontWeight']; 
}

const HomeTitles: React.FC<HomeTitlesProps> = ({
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
      {subtitle && (
        <TouchableOpacity onPress={onSubtitlePress} style={styles.subtitleview}>
          <Text style={[styles.subtitle, { color: subtitleColor || colors.reddish }]}>
            {subtitle}
          </Text>
          {iconSource && <Image source={iconSource} style={styles.icon} />}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeTitles;
