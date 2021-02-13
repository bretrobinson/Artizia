import React, {useEffect, useContext, useState} from 'react';
import {Button, View , StyleSheet, Text, Image, FlatList,TouchableWithoutFeedback , TextInput,KeyboardAvoidingView, ActivityIndicator, SafeAreaView} from 'react-native';
import craftserverApi from '../api/craftserver'
import { Input} from 'react-native-elements'
import {Context as AuthContext} from '../context/AuthContext'
import Moment from 'react-moment'
import Colors from '../constants/Colors';


const MessageDetail = ({route, navigation}) => {
    const{ state:{user} } = useContext(AuthContext)
    const {itemid, buyerid, sellerid, itemName, uri} = route.params
    const [messageData , setMessageData] = useState([]) 
    const [message, setMessage] = useState('')
    useEffect( ()=>{
        const fetchData = async ()=>{
         const response = await  craftserverApi.post(`/messages` , {buyerid, itemid, sellerid} )      
        //  await console.log(response.data)
         await setMessageData(response.data)
        }    
        fetchData()
    }, [itemid])

    const sentMessageHandler = async ()=>{
        if(message.length<2){
            alert('Please enter message to send')
            navigation.navigate('MessageDetail')
        }else {

         // console.log(message)
         try {
            const response = await  craftserverApi.patch('/messages/'+itemid, {message, buyerid, sellerid, uri, itemName})      
          
            alert(response.data)
            // navigation.navigate('ItemDetail')
            navigation.goBack()
          } catch (err){
            alert(err)
            navigation.goBack()
          }
        }
     
     
       
     
     }


    return (
        <SafeAreaView style={styles.container}>
            
            <KeyboardAvoidingView behavior='position' >
           
        <View >
            <FlatList 
            data={messageData}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item, index})=>{
                return (
            
                  <View style={styles.message} > 
                  {user.idusers === item.buyerid ? <Text>Me</Text> : <Text>BuyerId {item.buyerid}</Text>}
                  {user.idusers === item.sellerid ? <Text>Me</Text> : <Text>SellerId {item.sellerid}</Text>}
                     <Text>Itemid {item.itemid}</Text>
                     <Text>Message {item.message}</Text>
                     <View style={styles.date}>
                     <Text >Date  </Text>
                     <Moment element={Text} format= "YYYY MM DD ">{item.dateCreated}</Moment>
                     </View>
                     <View style={styles.date}>
                     <Text >Time  </Text>
                     <Moment element={Text} format= "hh mm">{item.dateCreated}</Moment>
                     </View>
                     
                  </View>
           
                )
            }}
        /> 
        
        <TextInput 
         style={styles.multilineInput}
         maxLength={240}
         multiline={true}
         numberOfLines={10}
        placeholder='Message'
        onChangeText={setMessage}/>
        <Button title='Send message' onPress={()=>sentMessageHandler()}/>
        
        </View>
       
        </KeyboardAvoidingView>
        
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        borderRadius:3,
        flex:1
    },
    message : {
        backgroundColor: Colors.accent,
        margin: 20,
        borderRadius: 10,
        padding:10
       
    },
        date: {
        flexDirection: 'row',
        marginVertical: 5
    },
    multilineInput: {
        height: 80,
        width: '90%',
        borderColor: 'black',
        borderWidth: 1,
        margin: 20,
        padding: 20,
        borderRadius:10
      },
      button:{
          paddingBottom:40
      },

})

export default MessageDetail;