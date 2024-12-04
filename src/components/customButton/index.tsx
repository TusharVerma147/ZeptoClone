import React from 'react';
import {TouchableOpacity, Text, Image,ImageSourcePropType, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { vh } from '../../utils/dimensions';
import styles from './styles';

interface CustomButtonProps {
  onPress: () => void; // The function to call when the button is pressed
  title: string; // The title to display inside the button
  icon?: ImageSourcePropType; // Optional icon to display inside the button
  style?: ViewStyle; // Custom style for the button container
  textStyle?: TextStyle; // Custom style for the button text
  borderRadius?: number; // Border radius for the button
  textColor?: string; // Text color for the title
  backgroundColor?: string; // Background color for the button
  padding?: number; // Padding for the button (defaults to vh(15))
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
        borderRadius && {borderRadius: borderRadius},
        backgroundColor && {backgroundColor: backgroundColor},
        padding && {padding: padding},
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