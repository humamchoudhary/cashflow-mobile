import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors, sample_data } from "../../utils";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
const Home = () => {

  const [data,setData]=useState({});
  
  useEffect(() => {
    setData(sample_data[0]);
  }, []);
  
  console.log(data)
  const [fontsLoaded] = useFonts({
    Regular: require("../fonts/Inter-Regular.ttf"),
    Medium: require("../fonts/Inter-Medium.ttf"),
    SemiBold: require("../fonts/Inter-SemiBold.ttf"),
    Bold: require("../fonts/Inter-Bold.ttf"),
    Italic: require("../fonts/Lato-BoldItalic.ttf"),
  });

  if (fontsLoaded && data !={} ) {
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
          {data.name}
        </Text>
        <LinearGradient
          colors={[colors.cta, colors.purple]}
          start={{ x: 0, y: 0.09 }}
          end={{ x: 1.5, y: 1.5 }}
          angle={102}
          style={styles.inner}
        >
          <Text style={{ color: "white", fontSize: 20, fontFamily: "Medium" }}>
            Current Balance
          </Text>
          <Text
            style={{
              marginTop: -3,
              color: "white",
              fontSize: 35,
              fontFamily: "Bold",
            }}
          >
            $ 400000
          </Text>
          <Text
            style={{
              marginTop: 5,
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
              fontSize: 30,
              fontFamily: "Bold",
            }}
          >
            $ 4000
          </Text>
        </LinearGradient>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginTop: 20,
          }}
        >
          <View style={{ ...styles.button, ...styles.btnRed }}>
            <Text style={{ color: colors.light, fontSize: 16 }}>Request</Text>
          </View>
          <View style={{ ...styles.button, ...styles.btnOrg }}>
            <Text style={{ color: colors.light, fontSize: 16 }}>Send</Text>
          </View>
        </View>

        <ScrollView styles={{ paddingTop: "20px" }}>
          <View style={styles.transection}>
            <View
              style={{
                backgroundColor: colors.green,
                borderRadius: 10000,
                padding: 10,
              }}
            >
              <Feather name="arrow-up-right" size={24} color={colors.light} />
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
                  fontSize: 20,
                  fontFamily: "SemiBold",
                }}
              >
                Pizza Hut
              </Text>
              <Text
                style={{
                  color: colors.light,
                  fontSize: 14,
                  fontFamily: "Regular",
                }}
              >
                Food
              </Text>
            </View>
            <Text
              style={{
                color: colors.light,
                fontSize: 20,
                fontFamily: "SemiBold",
              }}
            >
              $40.99
            </Text>
          </View>
          <View style={styles.transection}>
            <View
              style={{
                backgroundColor: colors.red,
                borderRadius: 10000,
                padding: 10,
              }}
            >
              <Feather name="arrow-down-left" size={24} color={colors.light} />
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
                  fontSize: 20,
                  fontFamily: "SemiBold",
                }}
              >
                Rent
              </Text>
              <Text
                style={{
                  color: colors.light,
                  fontSize: 14,
                  fontFamily: "Regular",
                }}
              >
                Misc
              </Text>
            </View>
            <Text
              style={{
                color: colors.light,
                fontSize: 20,
                fontFamily: "SemiBold",
              }}
            >
              $400
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default Home;
<Text
  style={{
    color: colors.light,
    fontSize: 14,
    fontFamily: "Regular",
  }}
>
  Misc
</Text>;
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
