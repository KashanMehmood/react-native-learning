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

class App extends Component{
  render(){
    return(
      <View>
        {/* inline style */}
        <Text style={ {fontSize:130} }> Hello world</Text>

        {/* style with stylesheet */}
        <Text style={styles.red}> Hello world</Text>
        
        {/* apply mutiple objects of styles */}
        <Text style={[styles.font,styles.redColor]}> Hello world</Text>

      </View>
    );
  }
}

{/* styele with stylesheet */}
const styles = StyleSheet.create({
  red:{
    color:'red',
    fontSize:40
  },
  font:{
    fontSize:40,
  },
  redColor:{
    color:'red',
  }
})


export default App;
