import React from "react";

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from "react-native";

import Colors from "../constants/Colors";

const CategoryGridTile = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android") {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComponent onPress={props.onSelect} style={{ flex: 1 }}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.categoryTitle}>{props.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.4,
    shadowOffset: { width: 5, height: 5 },
    elevation: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible"
  },
  container: {
    flex: 1,
    padding: 15,
    height: 150,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 10
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.mainFont
  }
});

export default CategoryGridTile;
