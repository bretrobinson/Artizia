import React, {useEffect, useContext, useState} from 'react';
import {Button, View , StyleSheet, Text, Image, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import craftserverApi from '../api/craftserver'
import {Context as AuthContext} from '../context/AuthContext'
import Moment from 'react-moment'
import Colors from '../constants/Colors';

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
            
                  <View style={Styles.constainer} > 
                  {user.idusers === item.buyerid ? <Text>Me</Text> : <Text>BuyerId {item.buyerid}</Text>}
                  {user.idusers === item.sellerid ? <Text>Me</Text> : <Text>SellerId {item.sellerid}</Text>}
                     <Text>Itemid {item.itemid}</Text>
                     <Text>Message {item.message}</Text>
                     <View style={Styles.date}>
                     <Text >Date  </Text>
                     <Moment element={Text} format= "YYYY MM DD ">{item.dateCreated}</Moment>
                     </View>
                     <View style={Styles.date}>
                     <Text >Time  </Text>
                     <Moment element={Text} format= "hh mm">{item.dateCreated}</Moment>
                     </View>
                     
                  </View>
           
                )
            }}
        /> 
        </View>
    );
};

const Styles = StyleSheet.create({
    constainer : {
        backgroundColor: Colors.accent,
        margin: 20,
        borderRadius: 10,
       
    },
        date: {
        flexDirection: 'row',
        marginVertical: 5
    }
})

export default MessageDetail;