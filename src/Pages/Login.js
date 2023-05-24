import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import AppTextInput from "../components/AppTextInput";
import { useNavigation } from "@react-navigation/native";
import { colors, URL } from "../../utils";
import { useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (user) {
        dispatch({ type: "SET_USER", payload: user });

        navigation.navigate("Index");
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
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: colors.bg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppTextInput
        value={username}
        setValue={setUsername}
        placeholder="Username"
      />

      <AppTextInput
        value={password}
        setValue={setPassword}
        placeholder="Password"
        password={true}
      />
      <TouchableOpacity onPress={handleLogin}>
        <LinearGradient
          colors={[colors.cta, colors.purple]}
          start={{ x: 0, y: 0.09 }}
          end={{ x: 1.5, y: 1.5 }}
          angle={102}
          style={{
            borderRadius: 5,
            borderRadius: 5,
            width: 90,
            height: 40,
            justifyContent: "center",
            // paddingLeft: 25,
            color: colors.light,
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.light }}>Login</Text>
        </LinearGradient>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});

export default Login;
