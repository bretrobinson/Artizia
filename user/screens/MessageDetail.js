import React, {useEffect, useContext, useState} from 'react';
import {Button, View , StyleSheet, Text, Image,Keyboard,TouchableWithoutFeedback , TextInput,KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import craftserverApi from '../api/craftserver'
import {Feather, AntDesign} from '@expo/vector-icons'
import {Context as AuthContext} from '../context/AuthContext'
import Moment from 'react-moment'
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';


const MessageDetail = ({route, navigation}) => {
    const{ state:{user} } = useContext(AuthContext)
    const {itemid, buyerid, sellerid, itemName, uri} = route.params
    const [messageData , setMessageData] = useState([]) 
    const [message, setMessage] = useState('')
    
    const FetchMessage = async ()=>{
        const response = await  craftserverApi.post(`/messages` , {buyerid, itemid, sellerid} )      
       //  await console.log(response.data)
        await setMessageData(response.data)
       }      
    useEffect( ()=>{
         FetchMessage()
    }, [itemid])
   
    const sentMessageHandler = async ()=>{
        if(message.length<2){
            alert('Please entermessssage to send')
            navigation.navigate('MessageDetail')
        }else {

         // console.log(message)
         try {
            const response = await  craftserverApi.patch('/messages/'+itemid, {message, buyerid, sellerid, uri, itemName})      
            await FetchMessage()
            await alert(response.data)
            await setMessage('')
            
          } catch (err){
            alert(err)
            navigation.goBack()
          }
        }  
     }

     const messageDeleteHandler = async (idmessages)=>{
        const response = await craftserverApi.delete('/messages/'+idmessages)
        await FetchMessage()
        await alert(response.data)
        
     }

     const messageDisplay = messageData.map((item)=>{
        return (
            <View style={(item.messageFrom - user.idusers) ?styles.messageMe : styles.messageTo } key={item.idmessages} > 
            
                  {user.idusers === item.buyerid ? <Text>Me</Text> : <Text>BuyerId {item.buyerid}</Text>}
                  {user.idusers === item.sellerid ? <Text>Me</Text> : <Text>SellerId {item.sellerid}</Text>}
                     <View style={{flexDirection:'row', }}>
                     <Text style={{marginRight:250}}>Itemid {item.itemid}</Text>
                     <AntDesign name='delete' size={20} onPress={()=>messageDeleteHandler(item.idmessages)}/>
                     </View>
                     <Text style={{fontSize:20}}>{item.message}</Text>
                     <View style={{flexDirection:'row'}}>
                     <View style={styles.date}>
                     <Text >Date  </Text>
                     <Moment element={Text} format= "YYYY MM DD ">{item.dateCreated}</Moment>
                     </View>
                     <View style={styles.date}>
                     <Text >Time  </Text>
                     <Moment element={Text} format= "hh mm">{item.dateCreated}</Moment>
                     </View>
                     </View>
                    
                  </View>
        )
     })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <KeyboardAvoidingView behavior= {Platform.OS ==='ios' ? 'position' : 'padding'} >
            
        <View >
            {messageDisplay}
        <View style={styles.sendMessage}>
        <TextInput 
         style={styles.multilineInput}
         maxLength={180}
         multiline={true}
         numberOfLines={30}
        placeholder='Message'
        value={message}
        onChangeText={setMessage}/>
        {/* <Button title='Send message' onPress={()=>sentMessageHandler()}/> */}
        <Feather style={{marginTop:15}} name='send' size={40} onPress={()=>sentMessageHandler()}/>
        </View>
        </View>
       
        </KeyboardAvoidingView>
        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        borderRadius:3,
        flex:1
    },
    messageMe : {
        backgroundColor: Colors.accent,
        marginVertical: 20,
        marginLeft:20,
        borderRadius: 10,
        padding:10,
       width: '80%',
    },
    messageTo : {
        backgroundColor: Colors.accent2,
        marginVertical: 20,
        marginLeft:50,
        borderRadius: 10,
        padding:10,
       width: '80%',
       
    },
        date: {
        flexDirection: 'row',
        marginVertical: 5
    },
    multilineInput: {
        height: 70,
        width: '85%',
       
        // margin: 20,
        // padding: 20,
        
      },
      sendMessage:{
          flexDirection:'row',
          borderColor: 'black',
          borderWidth: 1,
          margin:20,
          borderRadius:10
      },

})

export default MessageDetail;