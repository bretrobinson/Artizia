import React, {useEffect, useState} from 'react'
import {Text, View, FlatList, StyleSheet} from 'react-native'
import craftserverApi from '../api/craftserver'
import { MessageStackNavigator } from '../components/Navigation/StackNavigator'
// import {Context as AuthContext} from '../context/AuthContext'



const MessageList = () => {

const [messageData , setMessageData] = useState([])
    useEffect( ()=>{
        const fetchData = async ()=>{
         const response = await  craftserverApi.get('/messages/')      
         await console.log(response.data)
         await setMessageData(response.data)
        }    
        fetchData()
    }, [])


    return ( 
        <View>

<Text>This message List screen</Text>

<FlatList 
            data={messageData}
            keyExtractor={item=>item.idmessages}
            renderItem={({item})=>{
                return (
                  <View style={Styles.message}> 
                     <Text>Buyer {item.buyerid}</Text>
                     <Text>Seller{item.sellerid}</Text>
                     <Text>Item{item.itemid}</Text>
                     <Text>Message{item.message}</Text>
                  </View>
    
                )
            }}
        /> 
        </View>
     );
}
const Styles = StyleSheet.create({
    message: {
        margin: 10
    }
})
 
export default MessageList;