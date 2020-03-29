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

class App extends Component{
  render(){
    return(
      <View style={styles.parent} >
        <Text style={styles.childOne}> Hello world</Text>
        <Text style={styles.childTwo}> Hello world</Text>
        <Text style={styles.childThree}> Hello world</Text>
      </View>
    );
  }
}

{/* set parent flex always 1 */}
const styles = StyleSheet.create({
  parent:{
    flex:1,

    // to covert flex into row
    // flexDirection: 'row'

    // to covert flex into row
    // flexDirection: 'row-reverse'
  },
  childOne:{
    flex:1,
    backgroundColor:'red'
  },
  childTwo:{
    flex:2,
    backgroundColor:'yellow'
  },
  childThree:{
    flex:3,
    backgroundColor:'green'
  }
})


export default App;
