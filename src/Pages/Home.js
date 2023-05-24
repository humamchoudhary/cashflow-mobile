import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../utils";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import TransactionHistroy from "../components/TransactionHistroy";
const Home = ({ user }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(user);
  }, []);

  const [fontsLoaded] = useFonts({
    Regular: require("../fonts/Inter-Regular.ttf"),
    Medium: require("../fonts/Inter-Medium.ttf"),
    SemiBold: require("../fonts/Inter-SemiBold.ttf"),
    Bold: require("../fonts/Inter-Bold.ttf"),
    Italic: require("../fonts/Lato-BoldItalic.ttf"),
  });
  if (fontsLoaded && data != {}) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: colors.light,
            fontSize: 15,
            fontFamily: "Italic",
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            color: colors.light,
            fontSize: 25,
            fontFamily: "Bold",
            marginBottom: 10,
          }}
        >
          {data.full_name}
        </Text>
        <LinearGradient
          colors={[colors.cta, colors.purple]}
          start={{ x: 0, y: 0.09 }}
          end={{ x: 1.5, y: 1.5 }}
          angle={102}
          style={styles.inner}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontFamily: "Medium",
              marginTop: 10,
            }}
          >
            Current Balance
          </Text>
          <Text
            style={{
              marginTop: -3,
              color: "white",
              fontSize: 25,
              fontFamily: "Bold",
            }}
          >
            {data.currency} {data.balance}
          </Text>
          <Text
            style={{
              marginTop: 15,
              color: "white",
              fontSize: 15,
              fontFamily: "Medium",
            }}
          >
            This months incoming
          </Text>
          <Text
            style={{
              marginTop: -2,
              color: "white",
              fontSize: 25,
              fontFamily: "Bold",
            }}
          >
            {data.currency} {data.balance}
          </Text>
        </LinearGradient>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <View style={{ ...styles.button, ...styles.btnRed }}>
            <Text style={{ color: colors.light, fontSize: 16 }}>Request</Text>
          </View>
          <View style={{ ...styles.button, ...styles.btnOrg }}>
            <Text style={{ color: colors.light, fontSize: 16 }}>Send</Text>
          </View>
        </View>

        {/* <TransactionHistory/> */}
        <TransactionHistroy data={data} />
      </View>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    height: "200%",

    backgroundColor: colors.bg,
  },

  inner: {
    backgroundColor: colors.cta,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: "100%",
    borderRadius: 10,
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
  transection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 20,
    justifyContent: "center",
  },
});
