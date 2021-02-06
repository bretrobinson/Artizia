import React, {useEffect, useState} from 'react';
import { Button } from 'react-native';
import { View , StyleSheet, Text, Image, FlatList} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import craftserverApi from '../api/craftserver'


const ItemDetail = ({route, navigation}) => {
    const {itemId, uri, itemName, price} = route.params
    const [ItemImages, setItemImages] = useState([])
    
  useEffect( ()=>{
    const fetchData = async ()=>{
      const response = await  craftserverApi.get('/itemImages/'+itemId)
      
     await setItemImages(response.data)

    }
    
    fetchData()

}, [itemId])

console.log('N',ItemImages)
if (ItemImages.length>0){
  return (
    <View style={styles.container}>
        <Text>This ItemDetailScreen Page</Text>
        <Text>Item id from Landing {itemId}</Text>
        <Text>Short Description</Text>
        <Text>Detailed description</Text>
        <View style={styles.imageContainer}>
        <FlatList 
            data={ItemImages}
            horizontal
            keyExtractor={item=>item.id.toString()}
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
        <TextInput placeholder="Message to seller" />
        <Button title='Send message' onPress={()=>navigation.goBack()}/>

    </View> 
);
}else
 return <Text>Loading...</Text>
    
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
        width: 250,
        height: '80%',
        margin: 20
      },
      price: {
        // fontFamily: 'open-sans',
        fontSize: 26,
        color: '#888'
      },
})

export default ItemDetail;