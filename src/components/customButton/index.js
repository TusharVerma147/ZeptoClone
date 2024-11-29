import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import colors from '../../theme/colors';
import { vh } from '../../utils/dimensions';

const CustomButton = ({
  onPress,
  title,
  icon,
  style,
  textStyle,
  borderRadius,
  textColor,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        borderRadius && {borderRadius: borderRadius},
        backgroundColor && {backgroundColor: backgroundColor},
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

const styles = {
  button: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: vh(15),
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: responsiveFontSize(2.1),
  },
};

export default CustomButton;
