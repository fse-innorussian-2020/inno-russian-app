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

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});
