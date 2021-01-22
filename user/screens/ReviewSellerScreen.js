import React, {useState} from 'react';
import { View } from 'react-native';
import { StyleSheet, ScrollView, Button } from 'react-native';
import ItemReview from '../components/Review.components/ItemReview.component';
import SellerReview from '../components/Review.components/SellerReview.component';
import * as sellerReviewActions from '../store/actions/ReviewSeller';
import { createReviewItem } from '../store/actions/ReviewItem';
import { createReviewSeller } from '../store/actions/ReviewSeller';
import { useSelector, useDispatch } from 'react-redux';
import MainButton from '../components/MainButton';
const ReviewSellerScreen = props => {
  const [name, setName] = useState("");
  const [sellerRating,setsellerRating]= useState("");
 const [sellerReview,setSellerReview]=useState("");
 const [shortDescription, setshortDescription] = useState("");
 const [itemRating, setItemRating] = useState("");
 const [itemReview, setItemReview] = useState("");

 const dispatch = useDispatch();
    passValueItemReviewFunction = (shortDescription,itemRating,itemReview) => {
    setshortDescription(shortDescription);
    setItemReview(itemReview);
    setItemRating(itemRating);
    console.log("callback function parent-chielditemreview>>>>>");
    console.log("callback function parent description>>>>>" + shortDescription);
    console.log("callback function parent itemrating>>>>>" + itemRating);
    console.log("callback function parent  itemreview>>>>>" + itemReview);
 }
 

 passValueFunction = (name,sellerReview,sellerRating) => {
   setName(name);
   setSellerReview(sellerReview);
  setsellerRating(sellerRating);
  console.log("callback function parent name>>>>>" + name);
  console.log("callback function parent sellerating>>>>>" + sellerRating);
  console.log("callback function parent sellerreview>>>>>" + sellerReview);
}

  return (
    <ScrollView>
      <View>
        <SellerReview  parentCallback = {passValueFunction} />
        <ItemReview parentCallback ={passValueItemReviewFunction}/>
  
      </View>
      <View style={styles.buttonContainer}>
      <View style={styles.buttonSave}>
        <MainButton  
          title="Save"
          onPress={() => {
            dispatch(createReviewSeller(name,sellerReview,sellerRating));
            createReviewItem(dispatch, shortDescription,itemReview,itemRating);
          
         
          }}
        />
        </View>
        </View>
    </ScrollView>
  )

 
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  buttonSave:{
     paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 10,
    width: '60%',
  }
});
export default ReviewSellerScreen;