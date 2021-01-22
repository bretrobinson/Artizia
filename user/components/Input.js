import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}} />
}

const styles=StyleSheet.create({
    input: {
        height: 40,
        borderColor: Colors.accent,
        borderWidth: 1,
        marginVertical: 10,
        fontSize: 16
    }
});

export default Input;