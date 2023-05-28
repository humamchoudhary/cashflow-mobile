import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../utils";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import Swiper from "react-native-swiper";

const WalletScreen = ({ user }) => {
  const [fontsLoaded] = useFonts({
    Regular: require("../fonts/Inter-Regular.ttf"),
    Medium: require("../fonts/Inter-Medium.ttf"),
    SemiBold: require("../fonts/Inter-SemiBold.ttf"),
    Bold: require("../fonts/Inter-Bold.ttf"),
    Italic: require("../fonts/Lato-BoldItalic.ttf"),
  });
  const [isCardActivated, setIsCardActivated] = useState(true);


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
        {isCardActivated ? (
          <Swiper
            loop={false}
            style={styles.swiper}
            containerStyle={styles.swiperContainer}
            showsPagination={false}
          >
            {user.Cards.map((card, index) => (
              <Card key={index} details={card} user={user} index={index} />
            ))}
          </Swiper>
        ) : (
          <Text style={styles.deactivatedText}>Card Deactivated</Text>
        )}
      </View>
    );
  }
};

function Card({ details, user,index }) {
  const [revealCardNumber, setRevealCardNumber] = useState(false);
  const handleReveal = (value) => {
    setRevealCardNumber(value);
  };
  return (
    <View style={styles.slide}>
      <LinearGradient
        colors={index==0?[colors.cta, colors.purple]:[colors.purple, colors.cta]}
        start={{ x: 0, y: 0.09 }}
        end={{ x: 1.5, y: 1.5 }}
        angle={102}
        style={[
          styles.inner,
          {
            alignSelf: "center",
          },
        ]}
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
                style={{
                  fontFamily: "Bold",
                  fontSize: 24,
                  color: "#FFF",
                }}
              >
                {revealCardNumber ? details.card_number : "xxxx-xxxx-xxxx-xxxx"}
              </Text>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 18,
                  color: "#FFF",
                }}
              >
                {details.card_name}
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
              style={{
                textAlign: "right",
                transform: [{ rotate: "90deg" }],
              }}
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
                {revealCardNumber ? details.exp_date : "xx/xx"}
              </Text>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 18,
                  color: "#FFF",
                  textAlign: "right",
                }}
              >
                {revealCardNumber ? details.cvv : "xxx"}
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
          width: "95%",
          alignSelf: "center",
        }}
      >
        <View
          style={{ ...styles.button, ...styles.btnRed }}
          onTouchEndCapture={() => {
            handleReveal(!revealCardNumber);
          }}
        >
          <Text style={{ color: colors.light, fontSize: 16 }}>Reveal</Text>
        </View>
        <View style={{ ...styles.button, ...styles.btnOrg }}>
          <Text style={{ color: colors.light, fontSize: 16 }}>Deactivate</Text>
        </View>
      </View>

      <ScrollView styles={{ paddingTop: "20px", alignSelf: "center" }}>
        <View style={styles.transaction}>
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
                // width: `${progressDaily * 100}%`,
                width: `${
                  (details.limits.daily.spent / details.limits.daily.total) *
                  100
                }%`,
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
                {user.currency} {details.limits.daily.spent}
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
                {user.currency} {details.limits.daily.total}
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
                width: `${
                  (details.limits.monthly.spent /
                    details.limits.monthly.total) *
                  100
                }%`,
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
                {user.currency} {details.limits.monthly.spent}
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
                {user.currency} {details.limits.monthly.total}
              </Text>
              <Text
                style={{
                  color: "grey",
                  fontSize: 10,
                  fontFamily: "Regular",
                  textAlign: "right",
                }}
              >
                Total
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default WalletScreen;
const styles = StyleSheet.create({
  swiper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
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
    width: "95%",

    borderRadius: 15,
  },
  deactivatedText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
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
  transaction: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 20,
    justifyContent: "center",
  },
});
