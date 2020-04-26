import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>


        <Image source={{uri: 'https://reactjs.org/logo-og.png'
          }}
          style={styles.container}
        >
        </Image>
        {/* <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});
export default App;