import React from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { Icons } from '../../assets'; 
import styles from './styles';

interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  icon?: any; 
  secureTextEntry?: boolean;
  errorMessage: string | null;
  onIconPress?: () => void; 
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  icon,
  secureTextEntry = false,
  errorMessage,
  onIconPress,
}) => {
  return (
    <View>
    <View style={styles.input}>
    {icon && <Image style={styles.clock} source={icon} />} 
      <TextInput
        style={styles.space}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
      />
      {onIconPress && (
        <TouchableOpacity onPress={onIconPress}>
          <Image
            style={styles.clock}
            source={secureTextEntry ? Icons.eyeclose : Icons.eye} 
          />
        </TouchableOpacity>
      )}
    </View>
    {errorMessage ? (
        <Text style={styles.error}>{errorMessage}</Text>
      ) : (
        <View style={styles.noerror}></View>
      )}
    </View>
  );
};

export default CustomTextInput;
