import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './screens/Landing';

export default function App() {
  return (
    <View style={ styles.screens }>
      <Landing />
    </View>
  );
}

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }

});
