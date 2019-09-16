import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
        <Text>{selectedMeal.duration} minutes</Text>
        <Text style={{ fontWeight: "bold" }}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text>{selectedMeal.affordability}</Text>
      </View>
      <View style={styles.screen}>
        <Text>{selectedMeal.steps}</Text>
        <Button
          title="Go back to categories"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="star"
          iconName="ios-star"
          onPress={() => {
            console.log("starred");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  image: {
    height: 290,
    width: "100%"
  },
  mealDetails: {
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%"
  },
  mealRow: {
    flexDirection: "row"
  }
});

export default MealDetailScreen;
