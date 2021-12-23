// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import SearchScreen from './src/screens/SearchScreen';

// const navigator = createStackNavigator(
//   {
//     Search: SearchScreen,
//   },
//   {
//     initialRouteName: 'Search',
//     defaultNavigationOptions: {
//       title: 'Business Search',
//     },
//   }
// );

// export default createAppContainer(navigator);


//2nd add resultshowscreen
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
