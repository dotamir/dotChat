import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/index';

export default class App extends React.Component {
  constructor() {
    super();
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Index />
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
