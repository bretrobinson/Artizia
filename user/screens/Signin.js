import React, {useState, useContext, useCallback} from 'react';
import { View} from 'react-native';
import {StyleSheet} from 'react-native'
import {Button, Text, Input} from 'react-native-elements'
import {Context as AuthContext} from '../context/AuthContext'
import {useFocusEffect} from '@react-navigation/native'


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

        />

        <Input value={password} 
        onChangeText={setPassword}
        secureTextEntry
            autoCapitalize='none'
            autoCorrect={false}
            label='Password'
        />

{errorMessage ? <Text >{errorMessage}</Text> : null}

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
    }

})
export default Signin;