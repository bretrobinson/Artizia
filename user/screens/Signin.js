import React, {useState, useContext, useCallback} from 'react';
import { View} from 'react-native';
import {StyleSheet} from 'react-native'
import {Button, Text, Input} from 'react-native-elements'
import {Context as AuthContext} from '../context/AuthContext'
import {useFocusEffect} from '@react-navigation/native'
import Colors from '../constants/Colors';
import DefaultStyles from '../constants/defaultStyles'

const Signin = ({navigation}) => {
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState ('')
    const{ signin, state:{errorMessage}, clearErrorMessage } = useContext(AuthContext)

    useFocusEffect(
        useCallback(()=>{
            return ()=> clearErrorMessage()
        },[])
    )
  
    return (
        <View style={styles.container}>
        <Text h3 style={styles.signin} >Sign in</Text>
        {/* <AuthForm 
         submitButtonText='Sign in'
        onSubmit={signin}/> */}
        <Input value={email} 
            onChangeText={SetEmail}
            autoCapitalize='none'
            autoCorrect={false}
            label='Email'
            placeholder='name@email.com'
            placeholderTextColor= {Colors.placeholderTextColor}

        />

        <Input value={password} 
        onChangeText={setPassword}
        secureTextEntry
            autoCapitalize='none'
            autoCorrect={false}
            label='Password'
            placeholder='password'
            placeholderTextColor= {Colors.placeholderTextColor}
        />

{errorMessage ? <Text style={styles.error} >{errorMessage}</Text> : null}

<Button 
        title= 'Sign in' 
        onPress={()=>signin({email,password})}
        />
        <Button title='Go to Sign up' onPress={()=>navigation.navigate('Signup')} style={styles.goto}/>
            </View>
    );
};

const styles=StyleSheet.create({
    container: {
        marginTop : 40,
        marginHorizontal: 10
    },
    signin: {
        marginVertical: 60
    },
    goto:{
        marginVertical: 40
    },
    error: {
        textAlign: 'center',
        color: 'red',
        marginBottom: 10
    }

})
export default Signin;