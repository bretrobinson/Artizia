import React, {useEffect, useState, useContext} from 'react'
import {Text, View, FlatList, StyleSheet,   TouchableOpacity,
    TouchableNativeFeedback, Platform, Image} from 'react-native'
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

<FlatList 
            data={messageData}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item, index})=>{
                return (
            <TouchableCmp onPress={()=>navigate('MessageDetail', {buyerid:item.buyerid, sellerid: item.sellerid, itemName:item.itemName, itemid: item.itemid, uri:item.itemUri} )} useForeground>
                  <View style={styles.container} > 
                  <View style={styles.body}>
                  <Image style={styles.image} source={{ uri: item.itemUri }} />
                  <View>
                  <Text>{item.itemName}</Text>
                  {user.idusers === item.buyerid ? <Text style={styles.lineMargin}>Me</Text> : <Text style={styles.lineMargin}>BuyerId {item.buyerid}</Text>}
                  {user.idusers === item.sellerid ? <Text style={styles.lineMargin}>Me</Text> : <Text style={styles.lineMargin}>SellerId {item.sellerid}</Text>}
                    <Text style={styles.lineMargin}>ItemId {item.itemid}</Text>
                    </View>
                    </View>
                  </View>
            </TouchableCmp>
                )
            }}
        /> 
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: Colors.accent,
        borderRadius: 15
    },
    body: {
        flexDirection: 'row'
    },
    lineMargin: {
        margin: 5
    },
    image: {
        width: 90,
        height: 90,
        // margin: 10,
        borderRadius: 10,
        marginRight:20
      },
})
 
export default MessageList;