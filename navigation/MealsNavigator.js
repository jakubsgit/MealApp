import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Colors from "../constants/Colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      }
    }
  }
);

const MealsFavTebNavigator = createBottomTabNavigator(
  {
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
  },
  { 
    tabBarOptions: {
      activeTintColor: Colors.secondary,
      labelStyle: {
        fontSize: 22
      }

  } }
);

export default createAppContainer(MealsFavTebNavigator);
