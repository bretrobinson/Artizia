import React, {useEffect, useState} from 'react';
import { Button } from 'react-native';
import { View , StyleSheet, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import craftserverApi from '../api/craftserver'


const ItemDetail = ({route, navigation}) => {
    const {itemId, uri, itemName, price} = route.params
    const [ItemImages, setItemImages] = useState([])

    const ItemMessage = ` Is ${itemName} still available for sale Thanks`
    
  useEffect( ()=>{
    const fetchData = async ()=>{
      const response = await  craftserverApi.get('/itemImages/'+itemId)      
     await setItemImages(response.data)
    }    
    fetchData()
}, [itemId])

const sentMessageHandler = ()=>{
  alert('Message to the seller sent')
  navigation.goBack()
}

// console.log('N',ItemImages)
if (ItemImages.length>0){
  return (
    <View style={styles.container}>
        {/* <Text>This ItemDetailScreen Page</Text>
        <Text>Item id from Landing {itemId}</Text> */}
        <Text style={styles.price}>{ItemImages[0].name}</Text>
        <Text style={styles.price}>{ItemImages[0].drop}</Text>
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
        <Text style={styles.price}>{itemName}</Text>
        <Text style={styles.price}>Price ${price.toFixed(2)}</Text>
        <Text style={styles.price}>{ItemImages[0].createdDate}</Text>
        <Text style={styles.price}>{ItemImages[0].location}</Text>
        <TextInput 
         style={styles.multilineInput}
         maxLength={256}
         multiline={true}
         numberOfLines={10}
        defaultValue={ItemMessage}/>
        <Button title='Send message' onPress={()=>sentMessageHandler()}/>

    </View> 
);
}else
 return (
   <View style={styles.indicator}>
    <Text>Loading...</Text>
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
        margin: 10
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
        marginVertical: 10
      },
      indicator: {
        display: 'flex',
      
        justifyContent: 'center',
        flex: 1
      }
})

export default ItemDetail;