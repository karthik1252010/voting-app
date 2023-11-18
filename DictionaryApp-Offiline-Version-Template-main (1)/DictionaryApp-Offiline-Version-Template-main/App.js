import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {createAppContainer,createSwitchContainer} from 'react-navigation';
import Constants from 'expo-constants';

import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen
});

const AppContainer = createAppContainer(AppNavigator);

