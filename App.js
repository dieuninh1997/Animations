/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      aniScaleBtn1: new Animated.Value(1),
      opacityBtn1: new Animated.Value(0.6),
      opacityBtn2: new Animated.Value(0.4),
      aniScaleBtn2: new Animated.Value(1)
    }
  }
  componentDidMount() {
    const { aniScaleBtn1, aniScaleBtn2, opacityBtn1, opacityBtn2 } = this.state;
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(aniScaleBtn1, {
            toValue: 2,
            duration: 2000,
          }),
          Animated.timing(opacityBtn1, {
            toValue: 0,
            duration: 2000,
          }),
          Animated.timing(aniScaleBtn2, {
            toValue: 2,
            delay: 500,
            duration: 2000,
          }),
          Animated.timing(opacityBtn2, {
            toValue: 0,
            delay: 500,
            duration: 2000,
          })
        ])
      ])
    ).start()
  }

  render() {
    const { aniScaleBtn1, aniScaleBtn2, opacityBtn1, opacityBtn2 } = this.state;
    return (
      <View style={styles.container}>
        {/*  
        <View style={[styles.circle]} />
        <Animated.View
          style={[styles.circle, {
            position: 'absolute',
            opacity: opacityBtn1,
            transform: [
              { scale: aniScaleBtn1 }
            ]
          }]} />

        <Animated.View
          style={[styles.circle, {
            position: 'absolute',
            opacity: opacityBtn2,
            transform: [
              { scale: aniScaleBtn2 }
            ]
          }]} />
          */}
          <TouchableOpacity onPress={()=>{}}>
            <Text>Click me</Text>
          </TouchableOpacity>
          <View style={{width: 200, height: 200, backgroundColor: 'pink', opacity: 0}}/>

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
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue'
  }
});
