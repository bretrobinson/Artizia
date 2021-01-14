import React, {useState, useContext} from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import {Button, Text, Input} from 'react-native-elements'
import {Context as AuthContext} from '../context/AuthContext'


const Signin = ({navigation}) => {
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState ('')
    const{ signin} = useContext(AuthContext)
    return (
        <View style={styles.container}>
        <Text h3 >Sign in</Text>
        {/* <AuthForm 
         submitButtonText='Sign in'
        onSubmit={signin}/> */}
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
        title= 'Signi in' 
        onPress={()=>signin({email,password})}
        />
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