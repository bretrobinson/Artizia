import React from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import AuthForm from '../components/AuthForm'

const Signup = ({navigation}) => {
    return (
        <View style={styles.container}>
    <AuthForm />
    <Button title='Go to Signin' onPress={()=>navigation.navigate('Signin')}/>
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