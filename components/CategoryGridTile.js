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
      <TouchableComponent onPress={props.onSelect} style={{flex: 1}}>
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
    margin: 10
  },
  container: {
    flex: 1,
    padding: 15,
    height: 150,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    borderRadius: 10,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowOffset: { width: 10, height: 10 },
    elevation: 5
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.mainFont
  }
});

export default CategoryGridTile;
