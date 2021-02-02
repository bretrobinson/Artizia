import React, {useContext,  useEffect} from 'react';
import { View , Text,StyleSheet, FlatList} from 'react-native';
import {Context as AnnouncementContext} from '../context/AnnouncementContext'


const Announcements = () => {



    const {state, fetchAnnouncements} = useContext(AnnouncementContext)

useEffect(()=>{
    fetchAnnouncements()
}, [])
    return (
        <View>
            {/* <Text style={styles.title}>Announcements Page</Text> */}
            <FlatList 
                data={state}
                keyExtractor={item=>item.idAnnouncements.toString()}
                renderItem={({item})=>{
                    return <View style={styles.container}> 
                        <View>
                        <Text style={styles.messageTitle}>{item.title}</Text>
                                               </View>
                        <Text>{item.message}</Text>
                        <View style={styles.date}>
                        <Text>Date Entered</Text>
                        <Text>{item.dateEntered}</Text>
                        </View>
                        <View style={styles.date}>
                        <Text>Expired Date</Text>
                        <Text>{item.expiredDate}</Text>
                        </View>
                    </View>
                }}
            />

        </View> 
    );
};
const styles = StyleSheet.create({
    container:{
        margin: 20
    },
    title: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center',
        marginVertical: 20
    },
    date: {
        flexDirection: 'row',
        marginVertical: 5
    },
    messageTitle:{
        marginVertical: 5,
        fontWeight: 'bold'
    }
})

export default Announcements;