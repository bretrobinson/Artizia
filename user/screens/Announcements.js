import React, {useContext,  useEffect} from 'react';
import { View , Text,StyleSheet, FlatList} from 'react-native';
import {Context as AnnouncementContext} from '../context/AnnouncementContext'
import Colors from '../constants/Colors';
import DefaultStyles from '../constants/defaultStyles'

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
                        <View style={styles.message}>
                        <Text >{item.message}</Text>
                        <View style={styles.date}>
                        <Text>Date Entered</Text>
                        <Text>{item.dateEntered}</Text>
                        </View>
                        <View style={styles.date}>
                        <Text>Expired Date</Text>
                        <Text>{item.expiredDate}</Text>
                        </View>
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
        fontSize: DefaultStyles.title.fontSize,
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
        fontWeight: 'bold',
        fontSize: DefaultStyles.bodyText.fontSize
    },
    message: {
        backgroundColor: Colors.accent,
        padding: 10,
        borderRadius: 10
    }
})

export default Announcements;