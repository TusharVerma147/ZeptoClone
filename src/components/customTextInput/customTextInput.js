import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder, secureTextEntry, value, onChangeText, style }) => {
  return (
    <View>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor={'#60707D'}
        secureTextEntry={secureTextEntry}
        value={value} // Controlled by parent component
        onChangeText={onChangeText} // Trigger callback to parent
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    fontWeight: '500',
    paddingHorizontal: 20,
    color: '#000', // Ensure text is visible with proper color
  },
});

export default CustomTextInput;
