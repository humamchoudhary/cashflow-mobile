import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import TransactionHistroy from "../components/TransactionHistroy";
import AppTextInput from "../components/AppTextInput";
import { URL, colors } from "../../utils";
import { useDispatch } from "react-redux";
const RecieveScreen = ({ setRecieve, data }) => {
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(true);

  // console.log(qrCodeData)
  useEffect(() => {
    setLoading(true);
    setImageUrl(`data:image/png;base64,${data}`);
    setLoading(false);
  }, [data]);

  function handleGoBack() {
    setRecieve(false);
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.buttonText, { fontSize: 18, textAlign: "center" }]}>
        Recieve Amount
      </Text>
      <View style={styles.inputContainer}></View>

      <TouchableOpacity onPress={handleGoBack}>
        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 10,
          }}
        >
          <Ionicons name="arrow-back-circle-outline" size={30} color="red" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            styles.buttonText,
            {
              fontSize: 18,
              fontStyle: "normal",
              fontFamily: "Bold",
              textAlign: "center",
              marginBottom: 10,
            },
          ]}
        >
          Scan Qr
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 250, height: 250 }}
          />
        )}
      </View>
    </View>
  );
};

const SendScreen = ({ setSend, data }) => {
  const [amount, setAmount] = useState();
  const [accnumber, setAccnumber] = useState();
  const [reason, setReason] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async () => {
    const transaction = {
      mode: "Online transaction",
      transaction: "outgoing",
      destination: accnumber,
      amount: amount,
      type: reason,
      dest_type: "Inter Bank",
      username: data.username,
    };
    try {
      const response = await fetch(`${URL}/make_transaction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });

      if (response.ok) {
        const ret = await response.json();
        console.log(ret);
        if (ret.success) {
          setSend(false);
        } else {
          setError(true);
          setErrorMessage(ret.message);
        }
      }
    } catch (e) {
      setError(true);
      console.log(e);
      setErrorMessage("An error occurred while sending the transaction.");
    }
  };

  function handleGoBack() {
    setSend(false);
  }

  function handleSend() {
    handleFormSubmit();
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.buttonText, { fontSize: 18, textAlign: "center" }]}>
        Send Amount Screen
      </Text>

      <TouchableOpacity onPress={handleGoBack}>
        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 10,
          }}
        >
          <Ionicons name="arrow-back-circle-outline" size={30} color="red" />
        </View>
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppTextInput
          value={accnumber}
          setValue={setAccnumber}
          placeholder="Account number"
          accnumber={true}
        />
        <AppTextInput
          value={amount}
          setValue={setAmount}
          placeholder="Amount"
          amount={true}
        />
        <AppTextInput
          value={reason}
          setValue={setReason}
          placeholder="Reason for transaction"
          reason={true}
        />

        {error && <Text style={{ color: "#ff0000" }}>{errorMessage}</Text>}

        <TouchableOpacity onPress={handleSend}>
          <LinearGradient
            colors={[colors.cta, colors.purple]}
            start={{ x: 0, y: 0.09 }}
            end={{ x: 1.5, y: 1.5 }}
            angle={102}
            style={styles.sendButton}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Home = ({ user, setUser }) => {
  const [send, setSend] = useState(false);
  const [recive, setRecieve] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [fontsLoaded] = useFonts({
    Regular: require("../fonts/Inter-Regular.ttf"),
    Medium: require("../fonts/Inter-Medium.ttf"),
    SemiBold: require("../fonts/Inter-SemiBold.ttf"),
    Bold: require("../fonts/Inter-Bold.ttf"),
    Italic: require("../fonts/Lato-BoldItalic.ttf"),
  });

  const handleSendPress = () => {
    setSend(true);
  };

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
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    });
    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
    }
  };

  if (fontsLoaded && Object.keys(user).length > 0 && !send && !recive) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.fullNameText}>{user.full_name}</Text>
          <TouchableOpacity onPress={handleLogin} style={styles.fullNameText}>
            <Feather name="refresh-cw" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={[colors.cta, colors.purple]}
          start={{ x: 0, y: 0.09 }}
          end={{ x: 1.5, y: 1.5 }}
          angle={102}
          style={styles.inner}
        >
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceAmount}>
            {user.currency} {user.balance}
          </Text>
          <Text style={styles.monthlyIncomingLabel}>This month's incoming</Text>
          <Text style={styles.monthlyIncomingAmount}>
            {user.currency} {user.balance}
          </Text>
        </LinearGradient>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.btnRed]}
            onPress={() => {
              setRecieve(true);
            }}
          >
            <Text style={styles.buttonText}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.btnOrg]}
            onPress={handleSendPress}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
        <TransactionHistroy data={user} />
      </View>
    );
  }

  if (send) {
    return <SendScreen setSend={setSend} data={user} />;
  }
  if (recive) {
    return <RecieveScreen setRecieve={setRecieve} data={user.qr} />;
  }
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.bg,
  },
  welcomeText: {
    color: colors.light,
    fontSize: 15,
    fontFamily: "Italic",
  },
  fullNameText: {
    color: colors.light,
    fontSize: 25,
    fontFamily: "Bold",
    marginBottom: 10,
  },
  inner: {
    backgroundColor: colors.cta,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  balanceLabel: {
    color: "white",
    fontSize: 15,
    fontFamily: "Medium",
    marginTop: 10,
  },
  balanceAmount: {
    marginTop: -3,
    color: "white",
    fontSize: 25,
    fontFamily: "Bold",
  },
  monthlyIncomingLabel: {
    marginTop: 15,
    color: "white",
    fontSize: 15,
    fontFamily: "Medium",
  },
  monthlyIncomingAmount: {
    marginTop: -2,
    color: "white",
    fontSize: 25,
    fontFamily: "Bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  btnRed: { backgroundColor: colors.red },
  btnOrg: { backgroundColor: colors.orange },
  button: {
    padding: 15,
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.light,
    fontSize: 16,
  },
  sendButton: {
    borderRadius: 5,
    width: 90,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: colors.light,
  },
});
