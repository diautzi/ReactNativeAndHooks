import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen"
import GreetingsScreen from './src/screens/GreetingsScreen';
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ComponentsScreen: ComponentsScreen,
    GreetingsScreen: GreetingsScreen,
    ListScreen: ListScreen
  },
  {
    initialRouteName: "ListScreen",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
