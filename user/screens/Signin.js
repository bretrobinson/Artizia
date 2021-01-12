import React, {useContext} from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import AuthForm from '../components/AuthForm'
import {Context as AuthContext} from '../context/AuthContext'


const Signin = ({navigation}) => {
    const{ signin} = useContext(AuthContext)
    return (
        <View style={styles.container}>
            
        <AuthForm 
        headerText='Sign in'
        submitButtonText ='Sign in'
        onSubmit={signin}/>
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