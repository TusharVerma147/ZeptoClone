import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import { vh } from '../../utils/dimensions';
import styles from './styles';

const CustomButton = ({
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
