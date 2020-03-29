import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Profile"
          // onPress={() => this.props.navigation.navigate('Profile')}
          onPress={() => this.props.navigation.push('Profile')}
        />
      </View>
    );
  }
}

const Profile = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Component</Text>
      <Button
        title="Go to About"
        onPress={() => props.navigation.navigate('About')}
      />
      <Button
        title="Go back"
        onPress={() => props.navigation.goBack()}
      />
    </View>
  );
};

const About = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Component</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button
        title="Go back"
        onPress={() => props.navigation.goBack()}
      />
    </View>
  );
};

const AppNavigator = createStackNavigator({
  // initial screen name should be Home
  // screen: <component-name>
  Home: { screen: HomeScreen },
  Profile: { screen: Profile },
  About: { screen: About },
});

export default createAppContainer(AppNavigator);