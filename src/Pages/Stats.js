import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { colors } from "../../utils";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { LineChart } from "react-native-chart-kit";
const Width = Dimensions.get("window").width;

const Stats = () => {
  const [screen, setScreen] = useState(1);
  const [animatedValue] = useState(new Animated.Value(0));

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `${colors.cta}`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };
  const data2 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [12, 5, 30, 40, 22, 43],
        color: (opacity = 1) => `${colors.purple}`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: colors.bg,
    backgroundGradientTo: colors.bg,
    decimalPlaces: 0,
    color: (opacity = 1) => "white",
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const [fontsLoaded] = useFonts({
    Regular: require("../fonts/Inter-Regular.ttf"),
    Medium: require("../fonts/Inter-Medium.ttf"),
    SemiBold: require("../fonts/Inter-SemiBold.ttf"),
    Bold: require("../fonts/Inter-Bold.ttf"),
    Italic: require("../fonts/Lato-BoldItalic.ttf"),
  });

  const handleButtonClick = (loc) => {
    Animated.timing(animatedValue, {
      toValue: loc,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: colors.light,
            fontSize: 25,
            fontFamily: "Bold",
            paddingTop: "2%",
            paddingBottom: "10%",
            textAlign: "center",
          }}
        >
          Balance Overview
        </Text>
        {/* <LinearGradient
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
              textAlign: "center",
            }}
          >
            Current Balance
          </Text>
          <Text
            style={{
              marginTop: -3,
              color: "white",
              fontSize: 30,
              fontFamily: "SemiBold",
              textAlign: "center",
            }}
          >
            {data.currency} {data.balance}
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: "white",
              fontSize: 15,
              fontFamily: "Medium",
              textAlign: "center",
            }}
          >
            This months incoming
          </Text>
          <Text
            style={{
              marginTop: -2,
              color: "white",
              fontSize: 30,
              fontFamily: "SemiBold",
              textAlign: "center",
            }}
          >
            {data.currency} {data.months_income}
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: "white",
              fontSize: 15,
              fontFamily: "Medium",
              textAlign: "center",
            }}
          >
            Total saving
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: "white",
              fontSize: 25,
              fontFamily: "SemiBold",
              textAlign: "center",
            }}
          >
            {data.currency} {data.savings}
          </Text>
        </LinearGradient> */}
        <ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              marginTop: 20,
              backgroundColor: "gray",
              borderRadius: 10,
              position: "relative",
            }}
          >
            <TouchableOpacity
              style={{ ...styles.button }}
              title="Screen1"
              color="#841584"
              onPress={() => {
                setScreen(1);
                handleButtonClick(0);
              }}
            >
              <Text style={{ color: colors.light, fontSize: 16 }}>
                Expenses
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...styles.button }}
              title="Screen2"
              color="#841584"
              onPress={() => {
                setScreen(2);
                handleButtonClick(Width / 2 - 20);
              }}
            >
              <Text style={{ color: colors.light, fontSize: 16 }}>Income</Text>
            </TouchableOpacity>
            <Animated.View
              style={[
                { ...styles.button },
                {
                  backgroundColor: colors.red,
                  position: "absolute",
                  width: "50%",
                  height: "100%",
                  zIndex: -1,
                  left: 0,
                  transform: [{ translateX: animatedValue }],
                },
              ]}
            ></Animated.View>
          </View>
          {screen == 1 ? (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginVertical: 20,
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <LineChart
                data={data}
                width={Width}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={{
                  marginVertical: 20,
                  transform: [{ translateX: -20 }],
                }}
                withVerticalLines={false}
              />
            </View>
          ) : (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginVertical: 20,
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <LineChart
                data={data2}
                width={Width}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={{
                  marginVertical: 20,
                  transform: [{ translateX: -20 }],
                }}
                withVerticalLines={false}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
};

export default Stats;
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
});
