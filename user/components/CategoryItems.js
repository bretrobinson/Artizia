import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

const CategoryItems = props => {
    
    return (
    
        <View style={ styles.searchCategorySection } >
            <Text style={styles.title}>{props.category.category.name}</Text>
            <FlatList
            horizontal
            data={props.category.mostRecentItems}
            keyExtractor={item => item.id.toString()}
            renderItem={itemData => (
                <ProductItem
                itemId={itemData.item.id}
                image={itemData.item.imageUrl}
                name={itemData.item.name}
                price={itemData.item.price}
                >
                </ProductItem>
            )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
      },       
    searchCategorySection: {
        marginVertical: 10
    },
});

export default CategoryItems;