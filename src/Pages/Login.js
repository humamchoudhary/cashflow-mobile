import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image, // Import Image component
} from "react-native";
import React, { useState, useEffect } from "react";
import AppTextInput from "../components/AppTextInput";
import { useNavigation } from "@react-navigation/native";
import { colors, URL } from "../../utils";
import { useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

// Import your logo image
import Logo from "../../assets/logo.png";

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
    <View style={styles.container}>
      {/* Display the logo */}
      <Image source={Logo} style={styles.logo} />

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
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  loginButton: {
    borderRadius: 5,
    width: 90,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: colors.light,
  },
});

export default Login;
