import React, {useState,useContext} from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import AuthForm from '../components/AuthForm'
import {Context as AuthContext} from '../context/AuthContext'


const Signup = ({navigation}) => {
    const{ signup} = useContext(AuthContext)
    

    return (
        <View style={styles.container}>

    <AuthForm 
    headerText='Sign up'
    submitButtonText='Sign up'
    onSubmit={signup}/>
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