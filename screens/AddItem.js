import React from 'react';
import { Text, View } from 'react-native';
import styless from '../styles';
import Home from '../src/Add';
const HelloWorldApp = () => {
  return (
    <View style={styless.container}>
      <Home/>
    </View>
  )
}
export default HelloWorldApp;