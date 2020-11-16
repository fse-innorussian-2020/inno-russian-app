import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppText from "./AppText";
import CardFlip from "react-native-flip-card";
import Card from "./Card";
import colors from "../config/colors";

const WordCard = ({ title, content }) => {
  return (
    <View style={{ height: 180 }}>
      <CardFlip style={[styles.container]}>
        <Card
          title={title}
          textColor={colors.situationSecondary}
        />
        <Card
          content={content}
          textColor={colors.situationSecondary}
        />
      </CardFlip>
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
    borderColor: colors.situationSecondary,
    backgroundColor: colors.situationPrimary,
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

export default WordCard;
