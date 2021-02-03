import React from 'react';
import { View , StyleSheet, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ItemDetail = () => {
    return (
        <View style={styles.container}>
            <Text>This ItemDetailScreen Page</Text>
            <Text>Short Description</Text>
            <Text>Detailed description</Text>
            <Text>Photo</Text>
            <Text>Category</Text>
            <Text>SubCategory</Text>
            <Text>Price</Text>
            <TextInput placeholder="Message to seller" />

        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    }
})

export default ItemDetail;