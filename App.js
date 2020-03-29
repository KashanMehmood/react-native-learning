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

class App extends Component {

  login(){
    alert('You Clicked on ME.! ');
  }
  render(){
    return (
      <View>
        <Text>Class Component</Text>
        <Button 
          title="CLick Me.!"
          onPress={ ()=>{ alert('You Clicked on ME.! ') } }
        >
        </Button>
        <Button 
          title="Login"
          onPress={this.login}
          >
        </Button>
      </View>
    );
  }
};

export default App;
