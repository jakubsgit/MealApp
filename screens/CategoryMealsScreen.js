import React from "react";

import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import MainHeaderButton from '../components/HeaderButton';

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";

import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id
            }
          });
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "90%" }}
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
