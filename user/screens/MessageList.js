import React, { useEffect, useState, useContext } from 'react'
import {
    Text, View, FlatList, StyleSheet, TouchableOpacity,
    TouchableNativeFeedback, Platform, Image
} from 'react-native'
import craftserverApi from '../api/craftserver'
import { Context as AuthContext } from '../context/AuthContext'
import { navigate } from '../RootNavigation'
import Colors from '../constants/Colors';
import DefaultStyles from '../constants/defaultStyles';
import Card from '../components/Card';

const MessageList = () => {

    const { state: { user } } = useContext(AuthContext)

    const [messageData, setMessageData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await craftserverApi.get('/messages/')
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
        <View style={DefaultStyles.screenContainer}>

            <FlatList
                data={messageData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <Card style={DefaultStyles.messageCard}>
                            {/* <View style={styles.container} >  */}

                            <TouchableCmp onPress={() => navigate('MessageDetail', { buyerid: item.buyerid, sellerid: item.sellerid, itemName: item.itemName, itemid: item.itemid, uri: item.itemUri })} useForeground>

                                {/* <View style={styles.body}> */}
                                <View style={DefaultStyles.messageViewInCardContainer}>
                                    <Image style={DefaultStyles.messageImageInCard} source={{ uri: item.itemUri }} />

                                    <View>

                                        <View style={DefaultStyles.messageDetailsInCardContainer}>
                                            <Text style={DefaultStyles.messageItemNameInDetailsOfCard}>{item.itemName}</Text>
                                            {user.idusers === item.buyerid ? <Text style={DefaultStyles.messageBuyerInDetailsOfCard}>Me</Text> : <Text style={DefaultStyles.messageBuyerInDetailsOfCard}>BuyerId {item.buyerid}</Text>}
                                            {user.idusers === item.sellerid ? <Text style={DefaultStyles.messageSellerInDetailsOfCard}>Me</Text> : <Text style={DefaultStyles.messageSellerInDetailsOfCard}>SellerId {item.sellerid}</Text>}
                                            {/* <Text style={DefaultStyles.messageItemIdInDetailsOfCard}>ItemId {item.itemid}</Text> */}

                                        </View>
                                        {/* 
                    <Text>{item.itemName}</Text>
                    {user.idusers === item.buyerid ? <Text style={styles.lineMargin}>Me</Text> : <Text style={styles.lineMargin}>BuyerId {item.buyerid}</Text>}
                    {user.idusers === item.sellerid ? <Text style={styles.lineMargin}>Me</Text> : <Text style={styles.lineMargin}>SellerId {item.sellerid}</Text>}
                        <Text style={styles.lineMargin}>ItemId {item.itemid}</Text> */}
                                    </View>
                                    {/* </View> */}
                                    {/* </View> */}
                                </View>
                            </TouchableCmp>
                        </Card>

                    )
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    // container: {
    //     margin: 10,
    //     backgroundColor: Colors.accent,
    //     borderRadius: 15
    // },
    // body: {
    //     flexDirection: 'row'
    // },
    // lineMargin: {
    //     margin: 5
    // },
    // image: {
    //     width: 90,
    //     height: 90,
    //     // margin: 10,
    //     borderRadius: 10,
    //     marginRight:20
    //   },
})

export default MessageList;