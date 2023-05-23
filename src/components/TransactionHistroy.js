import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../utils";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";

const TransactionHistroy = ({ data }) => {
    console.log(data.transection_log != [])
    console.log(data.transection_log)
    if (data.transection_log.length === 0) {
        return (<View style={{  flex:1, justifyContent:"center",alignItems:'center',paddingBottom:'20%' }}><Text style={{color: colors.unfocus}}>No Transaction</Text></View>)
    } else {

        return (
            <ScrollView styles={{ paddingTop: "20px" }}>
                {data.transection_log.map((transection, index) => {
                    return (<View style={styles.transection} key={index}>
                        <View
                            style={{
                                backgroundColor: transection.transection == 'incoming' ? colors.green : colors.red,
                                borderRadius: 10000,
                                padding: 10,
                            }}
                        >
                            {transection.transection == 'incoming' ?

                                <Feather name="arrow-down-left" size={24} color={colors.light} /> : <Feather name="arrow-up-right" size={24} color={colors.light} />}
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
                                {transection.destination}
                            </Text>
                            <Text
                                style={{
                                    color: colors.light,
                                    fontSize: 14,
                                    fontFamily: "Regular",
                                }}
                            >
                                {transection.type}
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
                    </View>)
                })}
            </ScrollView>
        )
    }
}

export default TransactionHistroy

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
  