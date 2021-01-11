import React from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import AuthForm from '../components/AuthForm'


const Signin = () => {
    return (
        <View style={styles.container}>
        <AuthForm 
        headerText='Signin'/>
        <Button title='Go to Signup' onPress={()=>navigation.navigate('Signup')}/>
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