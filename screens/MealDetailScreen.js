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
import { Colors } from "react-native-paper";

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
      <View style={styles.mealScreen}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Ingredients:</Text>
        {selectedMeal.ingredients.map(ingredient => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
      </View>
      <View style={styles.mealScreen}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Steps:</Text>
        {selectedMeal.steps.map(step => (
          <Text key={step}>{step}</Text>
        ))}
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

MealDetailScreen.navigationOptions = navData => {
  const mealId = navData.navigation.getParam("mealId");
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
  mealScreen: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EAE8E1"
  },
  image: {
    height: 290,
    width: "100%"
  },
  mealDetails: {
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
    height: "5%"
  },
  mealRow: {
    flexDirection: "row"
  },
  steps: {
    fontSize: 15
  }
});

export default MealDetailScreen;
