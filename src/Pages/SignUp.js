import { View, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import { Button } from 'react-native';
import React,{useState} from 'react'
import AppTextInput from '../components/AppTextInput';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils';

import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  // Function to handle the sign-up action
  const handleSignUp = () => {
    // Perform sign-up logic here
    // Assuming 'NewPage' is the name of the new page to navigate to
    navigation.navigate('NewPage'); // Navigate to the 'NewPage' after successful sign-up
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: colors.bg,
        justifyContent: 'center',
        alignItems: "center"
      }}
    >
      <AppTextInput placeholder="Username" />
      <AppTextInput placeholder="Email" />
      <AppTextInput placeholder="Password" />

      <TouchableOpacity
        style={{
          backgroundColor: colors.cta,
          borderRadius: 40,
          width: 80,
          height: 30,
          justifyContent: 'center',
          paddingLeft: 25,
          marginTop: 10,
        }}
        onPress={handleSignUp}
      >
        <Text>SignUp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: colors.cta,
          borderRadius: 40,
          width: 80,
          height: 30,
          justifyContent: 'center',
          paddingLeft: 20,
          marginTop: 10,
        }}
        onPress={() => navigation.goBack()} // Go back to the previous screen
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;
