import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./app/Components/Card";
import Screen from "./app/Screen";
import AppText from "./app/Components/AppText";

export default function App() {
  return (
    <Screen style={styles.container}>
      <AppText>InnoRussian Application Blank Project</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
