import React from 'react';
import { View } from 'react-native';
import { StyleSheet, ScrollView, Button } from 'react-native';
import ItemReview from '../components/Review.components/ItemReview.component';
import SellerReview from '../components/Review.components/SellerReview.component';
import * as sellerReviewActions from '../../store/actions/ReviewSeller';
import { useSelector, useDispatch } from 'react-redux';
const ReviewSellerScreen = props => {
const sellerReview  = useSelector(state => {

    for (const key in state.cart.items) {
      transformedSellerReview.push({
        sellerId: key,
        name: state.cart.items[key].name,
        sellerRating: state.cart.items[key].sellerRating,
        sellerReview: state.cart.items[key].sellerReview,
      
      });
    }
   
  });
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View>
        <SellerReview />
        <ItemReview />
        <View >
        <Button
          color={Colors.accent}
          title="Save"
          onPress={() => {
            dispatch(sellerReviewActions.createReviewSeller(sellerReview));
          }}
        />
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