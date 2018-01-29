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
import Spotify from '@puradox/react-native-spotify';

/*
*/

let spotifyOptions = {
  "clientID": "69708bf2b35e4cc2b208fafa600ce9a9",
  "sessionUserDefaultsKey": "SpotifySession",
  "redirectURL": "https://github.com/shreyfirst/moodmixer",
  "scopes": ["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
};
console.log("Spotify",Spotify)
export default class App extends React.Component {

  render() {
      const { navigate } = this.props.navigation;
      Spotify.initialize(spotifyOptions, (loggedIn, error) => {
          if (error != null) {
              Alert.alert("ERROR", error.message);
          }
      });

      Spotify.login((loggedIn, error) => {
        if(error)
        {
          Alert.alert("Error", error.message);
        }
        if(loggedIn)
        {
          navigate('CameraScreen')
        }
  });

    return (
      <View style={styles.container}>
        <Text>Please wait as we login you in :)</Text>
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