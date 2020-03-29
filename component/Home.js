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

const Home = (props) =>{
    // to see all props
    // console.warn(props);
    return(
      <View>
        <Text>
            This is the home component
            <Text>
            {props.name}
            </Text>
        </Text>
      </View>
    )
} 

export default Home;
