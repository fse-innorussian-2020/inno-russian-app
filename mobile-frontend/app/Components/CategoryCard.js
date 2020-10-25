import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppText from "./AppText";
import CardFlip from "react-native-flip-card";
import Card from "./Card";
import colors from "../config/colors";

const CategoryCard = ({ title, content }) => {
  return (
    <View style={[styles.container]}>
      <Card
        title={title}
        content={content}
        textColor={colors.categorySecondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    margin: "2%",
    width: "96%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.categoryPrimary,
    borderColor: colors.categorySecondary,
    borderWidth: 3,
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    color: "white",
  },
});

export default CategoryCard;
