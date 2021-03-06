import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../Screen";
import AppText from "../Components/AppText";
import WordCard from "../Components/WordCard";
import network from "../config/network"
import cache from "../utility/cache"

const CardListingScreen = (props) => {
  const [cards, setCards] = useState([{ id: "1", name: "nothing" }]);
  const getData = async () => {
    const res = await fetch(network.url + "/cards.json")
      .then((res) => res.json())
      .then((res) => setCards(res)).catch(e => console.log(e));
  };
  useEffect(() => {
    cache.get("ALL").then(res => {
      console.log(res)
      setCards(res)
    })
  }, []);
  return (
    <Screen>
        <FlatList
          data={cards[0].sections}
          keyExtractor={(card) => card.id}
          renderItem={({ item }) => {
            return (
              <WordCard
                title={item.englishText}
                content={
                  item.russianText +
                  "\n" +
                  item.phoneticText
                }
              />
            );
          }}
        />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CardListingScreen;
