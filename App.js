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
      userName: '',
      password:''
    }

  }

  submit(){
    console.warn(this.state);
  }

  render(){
    return(
      <View style={styles.parent}>
        <Text>Handling TextInput</Text>
        <Text>{this.state.userName}</Text>
        <TextInput 
          placeholder={"Enter your name"}
          onChangeText={ (text) => { this.setState({userName:text}) } }
        >
        </TextInput>

        <TextInput 
          placeholder={"Enter your password"}
          secureTextEntry={true}
          onChangeText={ (text) => { this.setState({password:text}) } }
        >
        </TextInput>

        <Button 
          title="Click"
          onPress={ ()=>{ this.submit() } }
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
