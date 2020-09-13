import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import ResultsDetail from './src/components/ResultsDetail';


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  }, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Bussiness Search'
    }
  }
);

 export default createAppContainer(navigator);