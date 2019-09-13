import React from "react";

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground
} from "react-native";

import Colors from "../constants/Colors";

const MealItem = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <TouchableComponent onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleBox}>
                <Text style={styles.mealTitle}>{props.title} </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.duration} minutes</Text>
            <Text style={{ fontWeight: "bold" }}>
              {props.complexity.toUpperCase()}
            </Text>
            <Text>{props.affordability}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 240,
    width: "100%",
    margin: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    overflow: "hidden"
  },
  mealRow: {
    flexDirection: "row"
  },
  titleBox: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },    
  mealTitle: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 10
  },
  mealHeader: {
    height: "90%",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  mealDetails: {
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%"
  },
  bgImage: {
    width: "100%",
    height: "100%"
  }
});

export default MealItem;
