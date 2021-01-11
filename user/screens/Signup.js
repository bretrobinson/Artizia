import React from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import AuthForm from '../components/AuthForm'

const Signup = ({navigation}) => {
    return (
        <View style={styles.container}>
    <AuthForm 
    headerText='Sign up'
    submitButtonText='Sign up'
    onSubmit={()=>console.log('sign up email and password')}/>
    <Button title='Go to Sign in' onPress={()=>navigation.navigate('Signin')}/>
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