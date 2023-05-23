import { View, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import { Button } from 'react-native';
import React,{useState,useEffect} from 'react'
import AppTextInput from '../components/AppTextInput';
import { useNavigation } from '@react-navigation/native';
import { colors, URL} from '../../utils';
import { useDispatch } from 'react-redux';
const Login = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()    
    const [user, setUser] = useState();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(false);

  
    useEffect(() => {
      async function fetchData() {
        if (user) {
          dispatch({ type: "SET_USER", payload: user });

          navigation.navigate('Index')
        }
      }
  
      fetchData();
        }, [user]);
    const handleLogin = async () => {
        
        const response = await fetch(`${URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username, password: password }),
        });
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
    }
    }
  
    return (
      <View style={{
          width:"100%", height:"100%",flex: 1,
          backgroundColor: colors.bg,justifyContent:'center',
          alignItems:"center" 
        }}>

        <AppTextInput value={username} setValue={setUsername} placeholder="Username"/>

        <AppTextInput value={password} setValue={setPassword} placeholder="Password" password={true}/>


        
        <TouchableOpacity style={{   backgroundColor: colors.cta,
            borderRadius: 40,
            width: 80,
            height: 30,
            justifyContent:'center',
            paddingLeft:25,
            
            } } onPress={handleLogin}>
          <Text >Login</Text>
        </TouchableOpacity>
        
        {/* <TouchableOpacity style={{   backgroundColor: colors.cta,
            marginTop:10,
            borderRadius: 40,
            width: 80,
            height: 30,
            justifyContent:'center',
            paddingLeft:20
            } } onPress={()=>{
              navigation.navigate('Signup');
            }}>
          <Text >SignUp</Text>
        </TouchableOpacity> */}


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