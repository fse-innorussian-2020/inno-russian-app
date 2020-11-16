import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./app/Components/Card";
import CategoryCard from "./app/Components/CategoryCard";
import Screen from "./app/Screen";
import WordCard from "./app/Components/WordCard";
import CardListingScreen from "./app/Screens/CardListingScreen";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./app/navigation/BottomTabNavigation";
import AppNavigation from "./app/navigation/AppNavigation"

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});
