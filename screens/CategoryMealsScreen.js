import React from "react";

import { View, Text, Button, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId')

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  const renderMealItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    )
  }
  return (
    <View style={styles.screen}>
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={displayedMeals}
      renderItem={renderMealItem}
    />
      <Button
        title="Detail"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  console.log(navigationData.navigation.getParam("categoryId"));

  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
