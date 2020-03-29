import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import Home from './component/Home'

const App = () =>{
  return(
    <View>
      <Home name="kashan" />
    </View>
  )
} 
export default App;
