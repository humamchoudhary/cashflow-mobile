import { View, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import { Button } from 'react-native';
import React,{useState} from 'react'
import AppTextInput from '../components/AppTextInput';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils';

const Login = () => {
    const navigation = useNavigation();
    

    const handleLogin = () => {
      // Perform login logic here
      navigation.navigate('Index');
    }
  
    return (
      <View style={{
          width:"100%", height:"100%",flex: 1,
          backgroundColor: colors.bg,justifyContent:'center',
          alignItems:"center" 
        }}>

        <AppTextInput placeholder="Username"/>

        <AppTextInput placeholder="Password"/>


        
        <TouchableOpacity style={{   backgroundColor: colors.cta,
            borderRadius: 40,
            width: 80,
            height: 30,
            justifyContent:'center',
            paddingLeft:25,
            
            } } onPress={handleLogin}>
          <Text >Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{   backgroundColor: colors.cta,
            marginTop:10,
            borderRadius: 40,
            width: 80,
            height: 30,
            justifyContent:'center',
            paddingLeft:20
            } } onPress={handleSignUp}>
          <Text >SignUp</Text>
        </TouchableOpacity>


    </View>
    
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg  
    }
  });

export default Login