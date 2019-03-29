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
      isShowDropDown: false,
      aniHeightDropDown: new Animated.Value(0),
    }
  }
  
  handleClickShowDropDown=()=>{
    const { isShowDropDown } = this.state;
    const { aniHeightDropDown } = this.state;
    if(isShowDropDown){
      Animated.timing(
        aniHeightDropDown,
        {
          toValue: 0,
          duration: 2000,
        }
      ).start(()=>{
        this.setState({isShowDropDown: false});
      })
    }else{
      Animated.timing(
        aniHeightDropDown,
        {
          toValue: 200,
          duration: 2000,
        }
      ).start()
      this.setState({isShowDropDown: true});
    }
  }

  render() {
    const { isShowDropDown, aniHeightDropDown } = this.state;
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={this.handleClickShowDropDown}>
            <Text>Click me</Text>
          </TouchableOpacity>
          <Animated.View style={[isShowDropDown ? {opacity: 1} : {opacity: 0},{width: 200, height: aniHeightDropDown, backgroundColor: 'pink'}]}/>

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
