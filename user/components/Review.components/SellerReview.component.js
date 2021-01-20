import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  placeholder,
  Button
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

 
const sellerreviewscreen = props => {
  const [text, setText] = useState('');
  const [name, setName] = useState("");
  const [sellerRating,setsellerRating]= useState("");
 const [sellerReview,setSellerReview]=useState("");

  const nameInputHandler = (enteredName) => {
    setName(enteredName);
  };
  const sellerReviewInputHandler = (enteredreview) => {
    setSellerReview(enteredreview);
  };
  const sellerRatingInputHandler = (count) => {
    setsellerRating(count);
  };
  
  //const sellerreview = useSelector(state => state.sellerreviews);
  

 

const ratingCompleted = (rating) => {
  setsellerRating(rating)

}
useEffect(() => {
 
  console.log("callback function child>>>>>" + name);
  console.log("callback function child>>>>>" + sellerRating);
  console.log("callback function child>>>>>" + sellerReview);
 
  props.parentCallback(name,sellerReview,sellerRating);

})
//let disabled = (name.length > 0 && text.length > 0) ? false : true;
  return (
    <View style={styles.container}>

      <View >
        <TextInput   clearButtonMode="while-editing"
         ref={element => {
          this.attendee = element
        }}
          style={styles.ReviewInput}
          placeholder="Seller Name"
           onChangeText={nameInputHandler,textclean=> console.log("cleaning xxxxxxxfunction")}
          autoFocus={true}
          value={name,text}
        />
        <TextInput 
          value={sellerReview}
          style={styles.ReviewInput}
          placeholder="Seller review"
          multiline={true}
          keyboardType="default"
          autoCapitalize="sentences"
          returnKeyType="next"
         onChangeText={sellerReviewInputHandler}
          label={"Seller review"}
        />
       
        
      </View>
      <View>
        <Text style={styles.title}>Seller rating</Text>
        <AirbnbRating
          count={10}
          onChangeText={sellerRatingInputHandler}
          reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable"]}
          defaultRating={10}
          size={20}
          onFinishRating={ratingCompleted}
          value={sellerRating}
        />

      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flexDirection:'column',
    padding: 10,
    justifyContent: 'space-around',
    marginTop:'10%'
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

export default sellerreviewscreen;
