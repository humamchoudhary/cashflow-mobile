import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../utils";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";

const WalletScreen = () => {
  const [progressDaily, setProgressDaily] = useState(0.5);
  const [progressMonthly, setProgressMonthly] = useState(0.05);
  const [revealCardNumber, setRevealCardNumber] = useState(false);


  const [fontsLoaded] = useFonts({
    Regular: require("../fonts/Inter-Regular.ttf"),
    Medium: require("../fonts/Inter-Medium.ttf"),
    SemiBold: require("../fonts/Inter-SemiBold.ttf"),
    Bold: require("../fonts/Inter-Bold.ttf"),
    Italic: require("../fonts/Lato-BoldItalic.ttf"),
  });
  const handleReveal = (value) => {
    setRevealCardNumber(value);
  };

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: colors.light,
            fontSize: 25,
            fontFamily: "Bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          My Cards
        </Text>

        <LinearGradient
          colors={[colors.cta, colors.purple]}
          start={{ x: 0, y: 0.09 }}
          end={{ x: 1.5, y: 1.5 }}
          angle={102}
          style={styles.inner}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
              paddingBottom: 5,
              minHeight: 181,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View style={{ height: 3 }} />
              <View
                style={{
                  width: 50,
                  height: 35,
                  backgroundColor: "#E5C875",
                  borderRadius: 3,
                }}
              />
              <View>
                <Text
                  style={{ fontFamily: "Bold", fontSize: 24, color: "#FFF" }}
                >
                  {revealCardNumber ? "1234-5678-9012-3456" : "xxxx-xxxx-xxxx-xxxx"}
                </Text>
                <Text
                  style={{ fontFamily: "Medium", fontSize: 18, color: "#FFF" }}
                >
                  Rafay Qureshi
                </Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "SemiBold",
                  fontSize: 18,
                  color: "#FFF",
                  textAlign: "right",
                }}
              >
                Visa
              </Text>
              <AntDesign
                name="wifi"
                size={24}
                color="white"
                style={{ textAlign: "right", transform: [{ rotate: "90deg" }] }}
              />

              <View>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 18,
                  color: "#FFF",
                  textAlign: "right",
                }}
              >
                {revealCardNumber ? "12/27" : "xx/xx"}
              </Text>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 18,
                  color: "#FFF",
                  textAlign: "right",
                }}
              >
                {revealCardNumber ? "789" : "xxx"}
              </Text>
              </View>
              
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginTop: 20,
          }}
        >
          <View style={{ ...styles.button, ...styles.btnRed }} onTouchEndCapture={()=>{handleReveal(!revealCardNumber)}}>
            <Text style={{ color: colors.light, fontSize: 16 }}>Reveal</Text>
          </View>
          <View style={{ ...styles.button, ...styles.btnOrg }}>
            <Text style={{ color: colors.light, fontSize: 16 }}>
              Deactivate
            </Text>
          </View>
        </View>

        <ScrollView styles={{ paddingTop: "20px" }}>
          <View style={styles.transection}>
            <View
              style={{
                backgroundColor: colors.green2,
                borderRadius: 10000,
                padding: 10,
              }}
            >
              <AntDesign name="clockcircleo" size={24} color="black" />
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                flex: 2,
              }}
            >
              <Text
                style={{
                  color: colors.light,
                  fontSize: 18,
                  fontFamily: "SemiBold",
                }}
              >
                Card transaction History
              </Text>
              <Text
                style={{
                  color: colors.light,
                  fontSize: 12,
                  fontFamily: "Regular",
                }}
              >
                Track your transaction history from this Card
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingTop: 15,
              margin: 15,
              borderTopColor: "grey",
              borderTopWidth: 1.5,
            }}
          >
            <Text
              style={{
                color: colors.light,
                fontSize: 15,
                fontFamily: "SemiBold",
                paddingBottom: 10,
              }}
            >
              Card Limits
            </Text>

            <Text
              style={{
                color: colors.light,
                fontSize: 15,
                fontFamily: "Medium",
              }}
            >
              Daily limit
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                marginTop: 20,
                height: 3,
                backgroundColor: "gray",
                borderRadius: 100,
              }}
            >
              <View
                style={{
                  width: `${progressDaily * 100}%`,
                  height: 3,
                  backgroundColor: colors.green2,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                paddingTop: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    color: colors.light,
                    fontSize: 15,
                    fontFamily: "SemiBold",
                  }}
                >
                  70$
                </Text>
                <Text
                  style={{
                    color: "grey",
                    fontSize: 10,
                    fontFamily: "Regular",
                  }}
                >
                  Spent
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: colors.light,
                    fontSize: 15,
                    fontFamily: "SemiBold",
                    textAlign: "right",
                  }}
                >
                  $500
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: colors.light,
                fontSize: 15,
                fontFamily: "Medium",
                paddingTop: 30,
              }}
            >
              Monthly limit
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                marginTop: 20,
                height: 3,
                backgroundColor: "gray",
                borderRadius: 100,
              }}
            >
              <View
                style={{
                  width: `${progressMonthly * 100}%`,
                  height: 3,
                  backgroundColor: colors.green2,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                paddingTop: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    color: colors.light,
                    fontSize: 15,
                    fontFamily: "SemiBold",
                  }}
                >
                  70$
                </Text>
                <Text
                  style={{
                    color: "grey",
                    fontSize: 10,
                    fontFamily: "Regular",
                  }}
                >
                  Spent
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: colors.light,
                    fontSize: 15,
                    fontFamily: "SemiBold",
                    textAlign: "right",
                  }}
                >
                  $5000
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default WalletScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    height: 100,

    backgroundColor: colors.bg,
  },

  inner: {
    backgroundColor: colors.cta,
    padding: 10,
    width: "100%",

    borderRadius: 15,
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
