import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput
} from 'react-native';

class App extends Component{
  constructor(props){
    super();
    this.state = {
      userName: ''
    }

  }
  render(){
    return(
      <View style={styles.parent}>
        <Text>Handling TextInput</Text>
        <Text>{this.state.userName}</Text>
        <TextInput 
          placeholder={"Enter your name"}
          onChangeText={ (e) => { this.setState({userName:e}) } }
        >
        </TextInput>

        <Button 
          title="Click"
          onPress={ ()=>{ alert(this.state.userName) } }
         />
      </View>
    );
  }
}

{/* set parent flex always 1 */}
const styles = StyleSheet.create({
  parent:{
    flex:1,
  },
})


export default App;
