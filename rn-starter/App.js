import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen"
import GreetingsScreen from './src/screens/GreetingsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ComponentsScreen: ComponentsScreen,
    GreetingsScreen: GreetingsScreen,
    ListScreen: ListScreen,
    ImageScreen: ImageScreen
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
