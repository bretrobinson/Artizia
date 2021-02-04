import React from 'react';
import { Button } from 'react-native';
import { View , StyleSheet, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ItemDetail = ({route, navigation}) => {
    const {itemId} = route.params
    console.log(route)
    return (
        <View style={styles.container}>
            <Text>This ItemDetailScreen Page</Text>
            <Text>Item id from Landing {itemId}</Text>
            <Text>Short Description</Text>
            <Text>Detailed description</Text>
            <Text>Photo</Text>
            <Text>Category</Text>
            <Text>SubCategory</Text>
            <Text>Price</Text>
            <TextInput placeholder="Message to seller" />
            <Button title='Send message' onPress={()=>navigation.goBack()}/>

        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    }
})

export default ItemDetail;