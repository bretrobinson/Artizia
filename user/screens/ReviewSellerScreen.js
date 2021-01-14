import React from 'react';
import {View, StyleSheet} from 'react-native';
import ItemReview from '../components/ReviewComponents/ItemReview'



const ReviewSellerScreen = () => {
    return (
        <View style={styles.container}>
            <ItemReview/>
        </View>
    );
};
const styles= StyleSheet.create({
    container: {
        marginTop: 200
    }
})

export default ReviewSellerScreen;