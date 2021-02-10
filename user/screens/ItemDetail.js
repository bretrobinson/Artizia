import React, {useEffect, useContext, useState} from 'react';
import { Button } from 'react-native';
import { View , StyleSheet, Text, Image, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import craftserverApi from '../api/craftserver'
import {Context as AuthContext} from '../context/AuthContext'
// import { navigate } from '../RootNavigation';

const ItemDetail = ({route, navigation}) => {
  const{ state:{isSignedIn} } = useContext(AuthContext)
    const {itemId, uri, itemName, price} = route.params
    const [ItemImages, setItemImages] = useState([])
    const [idusers, setIdusers] = useState('')

    const ItemMessage = ` Hi, I'm intersted in the ${itemName}! Please contact me if this item is still available, Thanks`
    const [message, setMessage] = useState(ItemMessage)
  
  useEffect( ()=>{
    const fetchData = async ()=>{
      const response = await  craftserverApi.get('/itemImages/'+itemId)      
     await setItemImages(response.data)
     await setIdusers(response.data[0].userId)
    }    
    fetchData()
}, [itemId])

const sentMessageHandler = async ({message, idusers})=>{
   if(!isSignedIn){
    navigation.navigate('Signin')
  } else {
    // console.log(message)
    const response = await  craftserverApi.post('/messages/'+itemId, {message, idusers})      
    
    alert(response.data)
    // navigation.navigate('ItemDetail')
    navigation.goBack()
  }

}

// console.log('N',ItemImages)
if (ItemImages.length>0){
  return (
    <ScrollView>
    <View style={styles.container}>
        {/* <Text>This ItemDetailScreen Page</Text>
        <Text>Item id from Landing {itemId}</Text> */}
        <Text style={styles.price}>{ItemImages[0].name}</Text>
        <Text style={styles.price}>{ItemImages[0].drop}</Text>
        <Text style={styles.price}>Price ${price.toFixed(2)}</Text>
        <View style={styles.imageContainer}>
        <FlatList 
            data={ItemImages}
            horizontal
            keyExtractor={item=>item.url}
            renderItem={({item})=>{
                return (
                  <View> 
                     <Image style={styles.image} source={{ uri: item.url }} />
                  </View>
    
                )
            }}
        />          
        </View>
        
        <Text style={styles.price}>{ItemImages[0].createdDate}</Text>
        <Text style={styles.price}>{ItemImages[0].location}</Text>
        <TextInput 
         style={styles.multilineInput}
         maxLength={256}
         multiline={true}
         numberOfLines={10}
        defaultValue={ItemMessage}
        onChangeText={setMessage}/>
        <Button title='Send message' onPress={()=>sentMessageHandler({message, idusers})}/>
    </View> 
    </ScrollView>
);
}else
 return (
   <View style={styles.indicator}>
    <ActivityIndicator size='large' color='orange' />
    </View>
    )
    
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    imageContainer: {
        // width: '100%',
        height: '50%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
      },
      image: {
        width: 300,
        height: '100%',
        margin: 10,
        borderRadius: 10
      },
      price: {
        // fontFamily: 'open-sans',
        fontSize: 26,
        color: '#888'
      },
      multilineInput: {
        height: 80,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius:10
      },
      indicator: {
        display: 'flex',      
        justifyContent: 'center',
        flex: 1
      }
})

export default ItemDetail;