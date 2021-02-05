import React, {useState,useContext, useCallback} from 'react';
import { View } from 'react-native';
import {StyleSheet,ScrollView, KeyboardAvoidingView, SafeAreaView} from 'react-native'
import {Button, Text ,Input, colors} from 'react-native-elements'
import {Context as AuthContext} from '../context/AuthContext'
import RadioButton2 from '../components/RadioButton2'
import {useFocusEffect} from '@react-navigation/native'
import Colors from '../constants/Colors';
import DefaultStyles from '../constants/defaultStyles'

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
            labelStyle={DefaultStyles.bodyText}
            placeholderTextColor={Colors.placeholderTextColor}
            />
    <Input value ={lName}
        onChangeText={setLname}
        autoCorrect={false}
        label='Last Name'
        placeholder='LastName'
        labelStyle={DefaultStyles.bodyText}
        placeholderTextColor={Colors.placeholderTextColor} />
        
<Input value={email} 
            onChangeText={SetEmail}
            autoCapitalize='none'
            autoCorrect={false}
            label='Email'
            placeholder='email@mail.com'
            labelStyle={DefaultStyles.bodyText}
            placeholderTextColor={Colors.placeholderTextColor}
        />

        <Input value={password} 
        onChangeText={setPassword}
        secureTextEntry
            autoCapitalize='none'
            autoCorrect={false}
            label='Password'
            labelStyle={DefaultStyles.bodyText}
            placeholder='password'
            placeholderTextColor={Colors.placeholderTextColor}
        />
    <Input value ={location}
        onChangeText={setLocation}
        autoCorrect={false}
        label='Postal Code'
        placeholder='A0A 0A0'
        labelStyle={DefaultStyles.bodyText}
        placeholderTextColor={Colors.placeholderTextColor}
        />
   
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
        
    }

})
export default Signup;