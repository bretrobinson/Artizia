import React, {useState,useContext, useCallback} from 'react';
import { View } from 'react-native';
import {StyleSheet,ScrollView, KeyboardAvoidingView, SafeAreaView} from 'react-native'
import {Button, Text ,Input, colors} from 'react-native-elements'
import AuthForm from '../components/AuthForm'
import {Context as AuthContext} from '../context/AuthContext'
import RadioButton2 from '../components/RadioButton2'
import {useFocusEffect} from '@react-navigation/native'


const Signup = ({navigation}) => {
    const{ signup, state:{errorMessage}, clearErrorMessage} = useContext(AuthContext)
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [fName, SetFname] = useState('')
    const [lName, setLname] = useState('')
    const [location, setLocation] = useState('')
    const [payment, setPayment] = useState('Email Transfer')

    useFocusEffect(
        useCallback(()=>{
            return ()=> clearErrorMessage()
        },[])
    )
    

    return (
        <SafeAreaView>
        <ScrollView>
        <KeyboardAvoidingView style={{ height: '100%', justifyContent: 'center' }} >
        <View style={styles.container}>
    <Text h3 style={styles.signup} >Sign up</Text>
    <Input value ={fName}
            onChangeText={SetFname}
            autoCorrect={false}
            label='First Name' 
            placeholder='FirstName'
            placeholderTextColor='rgb(51, 153, 255)'
            />
    <Input value ={lName}
        onChangeText={setLname}
        autoCorrect={false}
        label='Last Name'
        placeholder='LastName'
        placeholderTextColor='rgb(51, 153, 255)' />
        
<Input value={email} 
            onChangeText={SetEmail}
            autoCapitalize='none'
            autoCorrect={false}
            label='Email'
            placeholder='email@mail.com'
            placeholderTextColor='rgb(51, 153, 255)'
        />

        <Input value={password} 
        onChangeText={setPassword}
        secureTextEntry
            autoCapitalize='none'
            autoCorrect={false}
            label='Password'
            placeholder='password'
            placeholderTextColor='rgb(51, 153, 255)'
        />
    <Input value ={location}
        onChangeText={setLocation}
        autoCorrect={false}
        label='Postal Code'
        placeholder='A0A 0A0'
        placeholderTextColor='rgb(51, 153, 255)'
        />
    {/* <AuthForm 
    submitButtonText='Sign up'
    onSubmit={signup}/> */}


    <RadioButton2 value={payment} setValue={setPayment}/>
    {errorMessage ? <Text style={styles.error} >{errorMessage}</Text> : null}

<Button 
        title='Sign up' 
        onPress={()=>signup({email, password, fName, lName, location, payment})}
        />
    <Button title='Go to Sign in' onPress={()=>navigation.navigate('Signin')} style={styles.goto}/>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
        </SafeAreaView>
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
        marginVertical: 40,
        
    },
    error: {
        textAlign: 'center',
        color: 'red',
        
    }

})
export default Signup;