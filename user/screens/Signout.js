import React, {useContext} from 'react';
import { Button } from 'react-native';
import { View , Text, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext'
const Signout = () => {

    const {signout} = useContext(AuthContext)
    return (
        <View>
            <Text style={Styles.header}>Sign Out</Text>
            <Button title='Signout' onPress={signout} />
            
        </View> 
    );
};

const Styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 50
    }
})

export default Signout;