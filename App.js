import React from 'react';
import { Button, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>

        <Open nav={this.props.navigation} />
      </View>
    );
  }
}

function Open(props) {
  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Open Drawer"
        onPress={
          () => props.nav.openDrawer()
        }
      />
    </View>
  );
}

function Profile(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile !</Text>
      <Open nav={props.navigation} />
    </View>
  );
}

function About(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About !</Text>
      <Open nav={props.navigation} />
    </View>
  );
}

const appNavigator = createDrawerNavigator({
  Home: { screen: App },
  About: { screen: About },
  Profile: { screen: Profile },
});


export default createAppContainer(appNavigator);