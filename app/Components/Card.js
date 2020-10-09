import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppText from "./AppText";
import CardFlip from "react-native-flip-card";

const Card = ({ title, content }) => {
  const cardRef = useRef();
  return (
    <View style={{ height: 180 }}>
      <CardFlip style={styles.container}>
        <View style={styles.card}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.text}>{content}</AppText>
        </View>
        <View style={styles.card}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.text}>{content}</AppText>
        </View>
      </CardFlip>
    </View>
    // <View style={styles.container}>
    // </View>
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
    flexDirection: "column",
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

export default Card;
