import React, {useEffect, useContext, useState} from 'react';
import {Button, View , StyleSheet, Text, Image, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import craftserverApi from '../api/craftserver'
import {Context as AuthContext} from '../context/AuthContext'

const MessageDetail = ({route, navigation}) => {
    const{ state:{user} } = useContext(AuthContext)
    const {itemid, buyerid, sellerid} = route.params
    const [messageData , setMessageData] = useState([]) 
    useEffect( ()=>{
        const fetchData = async ()=>{
         const response = await  craftserverApi.post(`/messages` , {buyerid, itemid, sellerid} )      
        //  await console.log(response.data)
         await setMessageData(response.data)
        }    
        fetchData()
    }, [])


    return (
        <View>
            <Text>Message Detail screen</Text>
            <FlatList 
            data={messageData}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item, index})=>{
                return (
            
                  <View style={Styles.message} > 
                  {user.idusers === item.buyerid ? <Text>Me</Text> : <Text>BuyerId {item.buyerid}</Text>}
                  {user.idusers === item.sellerid ? <Text>Me</Text> : <Text>SellerId {item.sellerid}</Text>}
                     <Text>Itemid {item.itemid}</Text>
                     <Text>Message {item.message}</Text>
                     <Text>TimeStamp {item.dateCreated}</Text>
                     
                  </View>
           
                )
            }}
        /> 
        </View>
    );
};

const Styles = StyleSheet.create({
    message: {
        margin: 10
    }
})

export default MessageDetail;