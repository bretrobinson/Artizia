import React from 'react';
import { View } from 'react-native';
import { StyleSheet, ScrollView, Button } from 'react-native';
import ItemReview from '../components/Review.components/ItemReview.component';
import SellerReview from '../components/Review.components/SellerReview.component';
const ReviewSellerScreen = props => {
  return (
    <ScrollView>
      <View>
        <SellerReview />
        <ItemReview />
        <View >
          <Button  title='Save' onPress={() => console.log} />
        </View>
      </View>
    </ScrollView>
  )

  const styles = StyleSheet.create({
    buttonContainer: {
      borderWidth: '10%',
      width:"50%"
    }

  });
}
export default ReviewSellerScreen;