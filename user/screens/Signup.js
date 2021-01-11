import React from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import AuthForm from '../components/AuthForm'

const Signup = () => {
    return (
        <View style={styles.container}>
    <AuthForm />
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        marginTop 
        : 200
    }
})
export default Signup;