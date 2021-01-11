import React from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import AuthForm from '../components/AuthForm'


const Signin = ({navigation}) => {
    return (
        <View style={styles.container}>
            
        <AuthForm 
        headerText='Sign in'
        submitButtonText ='Sign in'
        onSubmit={()=>console.log('sign in email and password')}/>
        <Button title='Go to Sign up' onPress={()=>navigation.navigate('Signup')}/>
            </View>
    );
};

const styles=StyleSheet.create({
    container: {
        marginTop 
        : 200
    }
})
export default Signin;