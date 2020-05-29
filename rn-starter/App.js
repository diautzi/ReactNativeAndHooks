import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen"
import GreetingsScreen from './src/screens/GreetingsScreen';


const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ComponentsScreen: ComponentsScreen,
    GreetingsScreen: GreetingsScreen
  },
  {
    initialRouteName: "GreetingsScreen",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
