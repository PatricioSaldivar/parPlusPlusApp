import {createStackNavigator} from  'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Home from '../screens/home';
import Compile from '../screens/compile';
import HowToUse from '../screens/howtouse';
import TechnicalDocs from '../screens/technicaldocs';
import About from '../screens/compile';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
        title: 'Home',
    }
  },
  Compile: {
    screen: Compile,
    navigationOptions: {
      title: 'How to Use',
    }
  },
  HowToUse: {
    screen: HowToUse,
    navigationOptions: {
      title: 'How to Use',
    }
  },
  TechnicalDocs: {
    screen: TechnicalDocs,
    navigationOptions: {
      title: 'Technical Documentation',
    }
  },

};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default createAppContainer(HomeStack);