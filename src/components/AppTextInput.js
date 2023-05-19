import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import fonts from '../fonts/fonts';
import { colors } from '../../utils';

const AppTextInput = ({ placeholder,value,setValue}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container,
      focused && styles.inputFocused
    ]}>
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={colors.unfocus}
        style={[
          styles.input,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={(text)=>{setValue(text)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: '75%',
    marginBottom: 15,
    borderColor: colors.unfocus,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: colors.light,
  },
  inputFocused: {
    borderWidth: 3,
    borderColor: colors.cta,
  },
});


export default AppTextInput; 