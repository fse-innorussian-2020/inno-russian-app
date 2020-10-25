import React, { useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import CardFlip from "react-native-flip-card";

const Card = ({ title, content, textColor = "white" }) => {
  return (
    <View style={styles.card}>
      <Image source={require("../../assets/heart.png")} style={styles.heart} />
      <AppText style={[styles.title, { color: textColor }]}>{title}</AppText>
      {content ? (
        <AppText style={[styles.text, { color: textColor }]}>{content}</AppText>
      ) : null}
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
    backgroundColor: "tomato",
    paddingHorizontal: 10,
  },
  heart: {
    width: 35,
    height: 35,
    position: "absolute",
    top: 15,
    right: 5,
  },
  card: {
    height: "100%",
    width: 350,
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

export default Card;
