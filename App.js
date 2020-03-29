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
  constructor(props){

    super(props);
    this.state = {
      userName:"kashan"
    }
  }

  test(){
    this.setState({userName:"Kashi Test"})
  }

  // jtni bar state update krogy utni bar render call hoga
  render(){
    return(
      <View>
        <Text>{this.state.userName}</Text>
        <Button onPress={ 
          ()=>{
            this.setState({userName:"Kashi"})
          } 
        }
        title="setState" />

        <Button onPress={ 
          ()=>{
            this.test()
          } 
        }
        title="Test" />
      </View>
    );
  }
}
export default App;
