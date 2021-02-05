import React from 'react';
import { Button } from 'react-native';
import { View , StyleSheet, Text, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ItemDetail = ({route, navigation}) => {
    const {itemId, uri, itemName, price} = route.params
    // console.log(route)
    return (
        <View style={styles.container}>
            <Text>This ItemDetailScreen Page</Text>
            <Text>Item id from Landing {itemId}</Text>
            <Text>Short Description</Text>
            <Text>Detailed description</Text>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: uri }} />
            </View>
            <Text style={styles.price}>{itemName}</Text>
            <Text style={styles.price}>Price ${price.toFixed(2)}</Text>
            <TextInput placeholder="Message to seller" />
            <Button title='Send message' onPress={()=>navigation.goBack()}/>

        </View> 
    );
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
        // width: '100%',
        height: '100%'
      },
      price: {
        // fontFamily: 'open-sans',
        fontSize: 26,
        color: '#888'
      },
})

export default ItemDetail;