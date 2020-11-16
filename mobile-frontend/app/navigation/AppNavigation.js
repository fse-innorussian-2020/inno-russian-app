import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryListingScreen from "../Screens/CategoryListingScreen";
import SubCategoryListingScreen from "../Screens/SubCategoryListingScreen";
import CardListingScreen from "../Screens/CardListingScreen";

const Stack = createStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false}}>
    <Stack.Screen name="Categories" component={CategoryListingScreen} />
    <Stack.Screen name="SubCategories" component={SubCategoryListingScreen} />
    <Stack.Screen name="Cards" component={CardListingScreen} />
  </Stack.Navigator>
);

export default AppNavigation;
