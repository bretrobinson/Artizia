import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
// import 'localstorage-polyfill'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

import { useSelector, useDispatch } from 'react-redux';
const ItemReviewscreen = props => {
 
  
  //const user = JSON.parse(localStorage.getItem("user"));
  //console.log("user id ooo>>>>>>>" + deserialisedState[0].userId);
  const [shortDescription, setshortDescription] = useState("");
  const [itemRating, setItemRating] = useState("");
  const [itemReview, setItemReview] = useState("");

  const DescriptionInputHandler = (enterDescription) => {
    setshortDescription(enterDescription);
  };
  const sellerReviewInputHandler = (enterreview) => {
    setItemReview(enterreview);
  };
  const itemRatingInputHandler = (count) => {
    setItemRating(count);
  };
 
  const ratingCompleted = (rating) => {
    setItemRating(rating)

  }

  useEffect(() => {
    props.parentCallback(shortDescription,itemRating,itemReview);
  
  })

  return (
    <View style={styles.container} >

      <View>
        <TextInput value={shortDescription}
          style={styles.ReviewInput}
          placeholder="Item short description"
          multiline={true}
          onChangeText={DescriptionInputHandler}
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect={false}
          returnKeyType="next"
          label='item description' />
        <TextInput value={itemReview}
          style={styles.ReviewInput}
          placeholder="Item review"
          multiline={true}
          keyboardType="default"
          autoCapitalize="sentences"
          returnKeyType="next"
          onChangeText={sellerReviewInputHandler}
          label={"item review"}
        />
      </View>
      <View>
        <Text style={styles.title}>Item rating</Text>
        <AirbnbRating
          count={10}
          reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable"]}
          defaultRating={10}
          size={20}
          onFinishRating={ratingCompleted}
          value={itemRating}
        />

      </View>
     

    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-around',
    marginTop: '10%'
  },

  ReviewInput: {
    flex: 1,
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '100%',
    height: '1%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  title: {
    textAlign: 'center',
    fontSize: 25,

  }

});

export default ItemReviewscreen;
