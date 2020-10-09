
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screen/WelcomeScreen";
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Homescreen from "./screen/homescreen";
export default  class App extends React.Component { 
  render(){

  
  return (
    
    <AppContainer/>
  );
}
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Homescreen:{screen:Homescreen}
})
const AppContainer= createAppContainer(switchNavigator);

