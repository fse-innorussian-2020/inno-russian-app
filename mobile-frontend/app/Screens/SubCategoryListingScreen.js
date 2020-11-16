import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryCard from "../Components/CategoryCard";
import network from "../config/network";
import Screen from "../Screen";
import cache from "../utility/cache"

const SubCategoryListingScreen = ({route, navigation}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    cache.get("ALL").then(res => {
      setCards(route.params.map(c => res[0].categories[c]))
    })
  }, []);
  return (
    <Screen>
        <FlatList
          data={cards}
          keyExtractor={(card) => parseInt(card.id)}
          renderItem={({ item }) => {
            return <TouchableOpacity onPress={()=>navigation.navigate("Cards", )}><CategoryCard title={item.name} /></TouchableOpacity>;
          }}
        />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SubCategoryListingScreen;
