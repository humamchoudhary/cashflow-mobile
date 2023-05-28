import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../utils";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
const TransactionHistroy = ({ data }) => {
  if (!data || !data.transaction_log || data.transaction_log.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20%",
        }}
      >
        <Text style={{ color: colors.unfocus }}>No Transactions</Text>
      </View>
    );
  } else {
    return (
      <ScrollView style={{ paddingTop: 20 }}>
        {data.transaction_log.map((transaction, index) => {
          return (
            <View style={styles.transaction} key={index}>
              <View
                style={{
                  backgroundColor:
                    transaction.transaction === "incoming"
                      ? colors.green
                      : colors.red,
                  borderRadius: 10000,
                  padding: 10,
                }}
              >
                <Feather
                  name={
                    transaction.transaction === "incoming"
                      ? "arrow-down-left"
                      : "arrow-up-right"
                  }
                  size={24}
                  color={colors.light}
                />
              </View>
              <View style={{ flex: 2 }}>
                <Text
                  style={{
                    color: colors.light,
                    fontSize: 20,
                    fontFamily: "SemiBold",
                  }}
                >
                  {transaction.destination}
                </Text>
                <Text
                  style={{
                    color: colors.light,
                    fontSize: 14,
                    fontFamily: "Regular",
                  }}
                >
                  {transaction.type}
                </Text>
              </View>
              <Text
                style={{
                  color: colors.light,
                  fontSize: 20,
                  fontFamily: "SemiBold",
                }}
              >
                ${transaction.amount}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
};

export default TransactionHistroy;

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
  transaction: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 20,
    justifyContent: "center",
  },
});
