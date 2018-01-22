import React from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Spotify from 'react-native-spotify';

let spotifyOptions = {
  "clientID": "69708bf2b35e4cc2b208fafa600ce9a9",
  "sessionUserDefaultsKey": "SpotifySession",
  "redirectURL": "MoodMixer://auth",
  "scopes": ["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
};
console.log("Spotify",Spotify)
export default class App extends React.Component {

  render() {

      Spotify.initialize(spotifyOptions, (loggedIn, error) => {
          if (error != null) {
              Alert.alert("ERROR", error.message);
          }
      });
  

    return (
      <View style={styles.container}>
        <Text>Login up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});