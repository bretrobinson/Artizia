import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './screens/Landing';
import Signup from './screens/Signup'

export default function App() {
  return (
    <View style={ styles.screens }>
      <Landing />
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }

});
