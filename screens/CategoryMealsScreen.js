import React from "react";

import { View, Text, Button, StyleSheet } from "react-native";

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Button
        title="Detail"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
      <Text>Category meals screen</Text>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
