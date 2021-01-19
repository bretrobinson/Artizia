import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';

const MainButton = ({ title, buttonColor, onPress }) => {

  // the name onPress can be anything as its passed from the calling component
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.button} backgroundColor={buttonColor ? buttonColor : styles.button.backgroundColor }>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: Colors.buttonText,
    //fontFamily: 'open-sans',
    fontSize: 15,
    textAlign: 'center'
  }
});

export default MainButton;