import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { colors } from "../../utils";
import { useNavigation } from '@react-navigation/native';
import TransactionHistroy from "../components/TransactionHistroy";

const SendScreen = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

