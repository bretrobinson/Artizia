import React, {useContext} from 'react';
import { View , Text, StyleSheet, Button} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext'
import Colors from '../constants/Colors';
import DefaultStyles from '../constants/defaultStyles'

const Profile = ({navigation}) => {

    const{ state } = useContext(AuthContext)
     if (state.user){
        return (
            <View style={styles.container}>
                <Button title='Edit Profile' onPress={()=>navigation.navigate('EditProfile')} />            
                <Text>Id {state.user.idusers}</Text>
                
                <Text style={DefaultStyles.bodyText} >Username</Text>
                <Text style={styles.data}>{state.user.email}</Text> 
                
                
                <Text style={DefaultStyles.bodyText} >First Name</Text>
                <Text style={styles.data}>{state.user.fName}</Text>
                
                
                <Text style={DefaultStyles.bodyText} >Last Name</Text>
                <Text style={styles.data}>{state.user.lName}</Text>
                
                
                <Text style={DefaultStyles.bodyText} >Email</Text>   
                <Text style={styles.data}> {state.user.email}</Text> 
                
                
                <Text style={DefaultStyles.bodyText} >Location</Text>             
                <Text style={styles.data}>{state.user.location}</Text>
                
                
                <Text style={DefaultStyles.bodyText} >Accepted Payment </Text>  
                <Text style={styles.data}>{state.user.payment}</Text>
                
                
                <Text style={DefaultStyles.bodyText} >Status</Text>
                <Text style={styles.data}>{state.user.status}</Text>
                
                
                <Text style={DefaultStyles.bodyText} >Date Joined</Text>
                <Text style={styles.data}>{state.user.joined}</Text>
                
            </View> 
        );
        
    } else return <Text>User not looged in</Text>

    
    
};

const styles = StyleSheet.create({
    container: {
        margin: 30
    },
    data: {
          fontSize: 18,
          width: 260,
          height: 45,
          backgroundColor: Colors.accent,
          padding: 10,
          margin: 5
    }
})

export default Profile;