import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CategoryCard from "../Components/CategoryCard";
import network from "../config/network";
import Screen from "../Screen";

const CategoryListingScreen = (props) => {
  const [cards, setCards] = useState([{ id: "1", name: "nothing" }]);
  const getData = async () => {
    const res = await fetch(network.url + "/cards.json")
      .then((res) => res.json())
      .then((res) => setCards(res)).catch(e => console.log(e));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Screen>
        <FlatList
          data={cards[0].categories}
          keyExtractor={(card) => card.id}
          renderItem={({ item }) => {
            return <CategoryCard title={item.name} />;
          }}
        />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CategoryListingScreen;
