import React from 'react';
import {TouchableOpacity, Text, Image,ImageSourcePropType, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { vh } from '../../utils/dimensions';
import styles from './styles';

interface CustomButtonProps {
  onPress: () => void; 
  title: string;
  icon?: ImageSourcePropType; 
  style?: StyleProp<ViewStyle | TextStyle>;
  textStyle?: TextStyle; 
  borderRadius?: number; 
  textColor?: string; 
  backgroundColor?: string; 
  padding?: number; 
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  icon,
  style,
  textStyle,
  borderRadius,
  textColor,
  backgroundColor,
  padding=vh(15)
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        borderRadius !== undefined && { borderRadius },
        backgroundColor !== undefined && { backgroundColor },
        padding !== undefined && { padding }
      ]}
      onPress={onPress}>
      {icon && <Image source={icon} style={styles.icon} />}
      <Text
        style={[styles.buttonText, textStyle, textColor && {color: textColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};



export default CustomButton;