/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import { Platform, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('./favourite_icon.json')}
          autoPlay
          loop 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
