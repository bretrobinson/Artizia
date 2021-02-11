import React, {useEffect, useState, useContext} from 'react'
import {Text, View, FlatList, StyleSheet,   TouchableOpacity,
    TouchableNativeFeedback, Platform} from 'react-native'
import craftserverApi from '../api/craftserver'
import {Context as AuthContext} from '../context/AuthContext'
import {navigate} from '../RootNavigation'
import Colors from '../constants/Colors';

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
                  {user.idusers === item.buyerid ? <Text style={Styles.lineMargin}>Me</Text> : <Text style={Styles.lineMargin}>BuyerId {item.buyerid}</Text>}
                  {user.idusers === item.sellerid ? <Text style={Styles.lineMargin}>Me</Text> : <Text style={Styles.lineMargin}>SellerId {item.sellerid}</Text>}
                    <Text style={Styles.lineMargin}>ItemId {item.itemid}</Text>
                     
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
        margin: 10,
        backgroundColor: Colors.accent,
        borderRadius: 15
    },
    lineMargin: {
        margin: 5
    }
})
 
export default MessageList;