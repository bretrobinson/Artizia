import React, {useState,useContext} from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import {Button, Text ,Input} from 'react-native-elements'
import AuthForm from '../components/AuthForm'
import {Context as AuthContext} from '../context/AuthContext'


const Signup = ({navigation}) => {
    const{ signup} = useContext(AuthContext)
    const [fName, SetFname] = useState('')
    const [lName, setLname] = useState('')
    const [location, setLocation] = useState('')
    const [payment, setPayment] = useState('')
    

    return (
        <View style={styles.container}>
    <Text h3 >Sign up</Text>
    <Input value ={fName}
            onChangeText={SetFname}
            autoCorrect={false}
            label='First Name' />
    <Input value ={lName}
        onChangeText={setLname}
        autoCorrect={false}
        label='Last Name' />
    <Input value ={location}
        onChangeText={setLocation}
        autoCorrect={false}
        label='Postal Code' />
    <AuthForm 
    submitButtonText='Sign up'
    onSubmit={signup}/>




    <Button title='Go to Sign in' onPress={()=>navigation.navigate('Signin')}/>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        marginTop 
        : 150
    }
})
export default Signup;