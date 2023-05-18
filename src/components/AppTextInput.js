import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import fonts from '../fonts/fonts';
import { colors } from '../../utils';

const AppTextInput = ({ inputMode, ...otherProps }) => {
  const [focused, setFocused] = useState(false);


  return (
    // <View style={styles.container}>
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={colors.unfocus}
      style={[
        styles.input,
        focused && styles.inputFocused,
      ]}
      {...otherProps}
    />

  );
};

const styles = StyleSheet.create({
  // container: {
  //   position: 'relative',
  // },

  input: {
    height: 30,
    width: "75%",
    borderWidth: 1,
    marginBottom: 15,
    borderColor: colors.unfocus,
    borderRadius: 4,
    color: colors.unfocus,
    paddingVertical: 20,
    paddingHorizontal: 10
  },

  inputFocused: {
    borderWidth: 3,
    borderColor: colors.cta,
    color: colors.red
    // shadowOffset: { width: 4, height: Spacing },
    // shadowColor: Colors.primary,
    // shadowOpacity: 0.2,
    // shadowRadius: Spacing,
  },
});

export default AppTextInput; 