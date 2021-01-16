import React, {useState,useContext} from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import {Button, Text ,Input} from 'react-native-elements'
import AuthForm from '../components/AuthForm'
import {Context as AuthContext} from '../context/AuthContext'
import RadioButton2 from '../components/RadioButton2'


const Signup = ({navigation}) => {
    const{ signup} = useContext(AuthContext)
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [fName, SetFname] = useState('')
    const [lName, setLname] = useState('')
    const [location, setLocation] = useState('')
    const [payment, setPayment] = useState('Email Transfer')
    

    return (
        <View style={styles.container}>
    <Text h3 style={styles.signup} >Sign up</Text>
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
    {/* <AuthForm 
    submitButtonText='Sign up'
    onSubmit={signup}/> */}

<Input value={email} 
            onChangeText={SetEmail}
            autoCapitalize='none'
            autoCorrect={false}
            label='Email'
        />

        <Input value={password} 
        onChangeText={setPassword}
        secureTextEntry
            autoCapitalize='none'
            autoCorrect={false}
            label='Password'
        />

    <RadioButton2 value={payment} setValue={setPayment}/>

<Button 
        title='Sign up' 
        onPress={()=>signup({email, password, fName, lName, location, payment})}
        />
    <Button title='Go to Sign in' onPress={()=>navigation.navigate('Signin')} style={styles.goto}/>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        marginTop : 0,
        marginHorizontal: 10
    },
    signup: {
        marginVertical: 20
    },
    goto:{
        marginVertical: 40
    }

})
export default Signup;