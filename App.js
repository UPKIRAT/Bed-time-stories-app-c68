import {decode, encode} from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WriteScreen from './Screens/WriteScreen'
import ReadScreen from './Screens/ReadScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
        );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read : {screen: ReadScreen},
  Write : {screen: WriteScreen},
});

const AppContainer = createAppContainer(TabNavigator)