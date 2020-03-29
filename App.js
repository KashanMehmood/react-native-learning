import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const App = () => {
  function login(){
    alert("login here");

  }
  return (
    <View>
      <Text>Functional Component</Text>
      <Button 
        title="CLick Me.!"
        onPress={ ()=>{ alert('You Clicked on ME.! ') } }
      ></Button>
      <Button 
        title="login"
        onPress={login}
      ></Button>
    </View>
  );
};

export default App;
