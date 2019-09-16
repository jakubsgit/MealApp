import React, { useState, useEffect, useCallback } from "react";

import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const FilterObject = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTitle}>{props.filter}</Text>
      <Switch
        thumbColor={Platform.OS === "android" ? "" : Colors.primary}
        trackColor={{ true: Colors.gold }}
        value={props.filterState}
        onValueChange={props.onValueChange}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <FilterObject
        filter="Gluten-free"
        filterState={isGlutenFree}
        onValueChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterObject
        filter="Vegan"
        filterState={isVegan}
        onValueChange={newValue => setIsVegan(newValue)}
      />
      <FilterObject
        filter="Vegetarian"
        filterState={isVegetarian}
        onValueChange={newValue => setIsVegetarian(newValue)}
      />
      <FilterObject
        filter="Lactose-free"
        filterState={isLactoseFree}
        onValueChange={newValue => setIsLactoseFree(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filters",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "flex-start"
  },
  filterContainer: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    textAlign: "right",
    marginHorizontal: 20
  },
  filterTitle: {
    fontSize: 19,
    fontWeight: "bold"
  }
});

export default FiltersScreen;
