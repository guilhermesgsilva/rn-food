import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import BusinessDetailScreen from "./src/screens/BusinessDetailScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    BusinessDetail: BusinessDetailScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: { title: "Business Search" },
  }
);

export default createAppContainer(navigator);
