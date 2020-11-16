import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryCard from "../Components/CategoryCard";
import network from "../config/network";
import Screen from "../Screen";
import cache from "../utility/cache"

const CategoryListingScreen = ({navigation}) => {
  const [cards, setCards] = useState([]);
  const getData = async () => {
    const res = await fetch(network.url + "/cards.json")
      .then((res) => res.json())
      .then((res) => cache.store("ALL",res)).catch(e => console.log(e));
  };
  useEffect(() => {
    getData();
    cache.get("ALL").then(res => {
      console.log(res)
      setCards([res[0].categories[0],])
      console.log(cards)
    })
  }, []);
  return (
    <Screen>
        <FlatList
          data={cards}
          keyExtractor={(card) => card.id}
          renderItem={({ item }) => {
            return <TouchableOpacity onPress={()=>navigation.navigate("SubCategories", [1,])}><CategoryCard title={item.name} /></TouchableOpacity>;
          }}
        />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CategoryListingScreen;
