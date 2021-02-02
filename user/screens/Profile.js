import React, {useEffect} from 'react';
import { View , Text, StyleSheet} from 'react-native';
import useResults from '../hooks/useResults.js'

const Profile = () => {

    const [fetchProfile, profile] = useResults()

    useEffect (()=>{
        fetchProfile()
    }, [])


    return (
        <View style={styles.container}>
            <Text>This Profile Page</Text>
            <Text>Id {profile.idusers}</Text>
            <Text>FirstName {profile.fName}</Text>
            <Text>LastName  {profile.lName}</Text>
            <Text>email {profile.email}</Text>            
            <Text>Location {profile.location}</Text>
            <Text>Accpted Payment  {profile.payment}</Text>
            <Text>Status {profile.status}</Text>
            <Text>Date Joined {profile.joined}</Text>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 30
    }
})

export default Profile;