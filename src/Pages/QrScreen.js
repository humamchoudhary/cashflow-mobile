import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { URL, colors } from "../../utils";
import { LinearGradient } from "expo-linear-gradient";
import AppTextInput from "../components/AppTextInput";
import { useNavigation } from "@react-navigation/native";
export default function QrScreen({ user }) {
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState();

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(JSON.parse(data.replace(/'/g, '"')));
    console.log(data);
  };
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      if (status === "granted") {
        setScanned(false);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {!scanned || !data ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <TransactionScreen setScan={setScanned} data={data} userData={user} />
      )}
    </View>
  );
}
function TransactionScreen({ userData, data, setScan }) {
  const [amount, setAmount] = useState("");
  const navigation = useNavigation();

  const handleTransaction = async () => {
    console.log(userData);
    const transaction = {
      mode: "Online transaction",
      transaction: "outgoing",
      destination: data.destination,
      username: userData.username,
      amount: amount,
      type: "Misc",
      dest_type: "Inter Bank",
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
          setScan(false);
          navigation.navigate("home");
        } else {
          setError(true);
        }
      }
    } catch (e) {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.accountName,
          {
            color: colors.light,
            textAlign: "center",
          },
        ]}
      >
        Recivers Data
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Text
          style={{
            color: colors.light,
            textAlign: "center",
          }}
        >
          username
        </Text>
        <Text
          style={{
            color: colors.light,
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          {data.destination}
        </Text>
        <Text
          style={{
            color: colors.light,
            textAlign: "center",
          }}
        >
          Trasaction Type
        </Text>
        <Text
          style={{
            color: colors.light,
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          {data.dest_type}
        </Text>
        <AppTextInput
          placeholder="Enter Amount"
          value={amount}
          setValue={setAmount}
          keyboardType="numeric"
          style={{
            alignSelf: "center",
          }}
        />
      </View>

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
          alignSelf: "center",
        }}
      >
        <TouchableOpacity onPress={handleTransaction}>
          <Text style={{ color: colors.light }}>Send</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    justifyContent: "space-between",
    height: "100%",
    paddingVertical: 10,
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});
