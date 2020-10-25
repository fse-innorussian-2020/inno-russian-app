import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import CategoryListingScreen from "../Screens/CategoryListingScreen";
import CardListingScreen from "../Screens/CardListingScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons"


const Tab = createBottomTabNavigator();

const BottomTabNavigation = (props) => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Categories" component={CategoryListingScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Cards" component={CardListingScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cards-variant" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BottomTabNavigation;
