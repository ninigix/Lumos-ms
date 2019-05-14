import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home/HomeScreen';
import RoomsScreen from '../screens/Rooms/RoomsScreenContainer';
import SimulationScreen from '../screens/Simulation/SimulationScreenContainer';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home'
};

const RoomsStack = createStackNavigator({
  Rooms: RoomsScreen,
});

RoomsStack.navigationOptions = {
  tabBarLabel: 'Rooms'
};

const SimulationStack = createStackNavigator({
  Simulation: SimulationScreen,
});

SimulationStack.navigationOptions = {
  tabBarLabel: 'Simulation'
};

export default createBottomTabNavigator({
  HomeStack,
  RoomsStack,
  SimulationStack,
},{
  defaultNavigationOptions: () => ({
  tabBarOptions: {
    activeTintColor: '#2274a5',
    labelStyle: {
      fontSize: 20,
      fontFamily: 'raleway-bold',
    },
  },
})
});
