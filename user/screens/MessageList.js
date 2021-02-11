import React, {useEffect, useState, useContext} from 'react'
import {Text, View, FlatList, StyleSheet,   TouchableOpacity,
    TouchableNativeFeedback,} from 'react-native'
import craftserverApi from '../api/craftserver'
import {Context as AuthContext} from '../context/AuthContext'
import {navigate} from '../RootNavigation'


const MessageList = () => {

    const{ state:{user} } = useContext(AuthContext)
 
const [messageData , setMessageData] = useState([])
    useEffect( ()=>{
        const fetchData = async ()=>{
         const response = await  craftserverApi.get('/messages/')      
        //  await console.log(response.data)
         await setMessageData(response.data)
        }    
        fetchData()
    }, [])
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
      TouchableCmp = TouchableNativeFeedback;
    }

    return ( 
        <View>

<Text>This is message List screen</Text>

<FlatList 
            data={messageData}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item, index})=>{
                return (
            <TouchableCmp onPress={()=>navigate('MessageDetail', {buyerid:item.buyerid, sellerid: item.sellerid, itemid: item.itemid} )} useForeground>
                  <View style={Styles.message} > 
                  {user.idusers === item.buyerid ? <Text>Me</Text> : <Text>BuyerId {item.buyerid}</Text>}
                  {user.idusers === item.sellerid ? <Text>Me</Text> : <Text>SellerId {item.sellerid}</Text>}
                    <Text>ItemId {item.itemid}</Text>
                     
                  </View>
            </TouchableCmp>
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