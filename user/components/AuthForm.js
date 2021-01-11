import React, {useState} from 'react';
import {StyleSheet} from 'react-native'
import {Input, Button, Text } from 'react-native-elements'

const AuthForm = () => {
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState ('')

    return (
        <>
        <Text h3 >Sign in Screen</Text>
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
        <Button title='Sigin up' />

            
        </>
    );
};

const styles = StyleSheet.create({})

export default AuthForm;