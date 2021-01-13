import React, {useState} from 'react';
import {StyleSheet} from 'react-native'
import {Input, Button, Text } from 'react-native-elements'

const AuthForm = ({submitButtonText, onSubmit}) => {
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState ('')
    
    return (
        <>
        
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
        <Button 
        title={submitButtonText} 
        onPress={()=>onSubmit({email,password})}
        />

            
        </>
    );
};

const styles = StyleSheet.create({})

export default AuthForm;