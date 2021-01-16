import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

const ratingCompleted = (rating) => {
  console.log("Rating is: " + rating)
}

const ItemReview = props => {
 


  return (
    <View style={styles.container} >
      
      <View>
        <TextInput value={""}
          style={styles.ReviewInput}
          placeholder="Item short description"
          multiline={true}
          onChangeText={"Set description"}
          keyboardType="default"
          autoCapitalize="sentences"
          returnKeyType="next"
          label='item description' />
        <TextInput value={""}
          style={styles.ReviewInput}
          placeholder="Item review"
          multiline={true}
          keyboardType="default"
          autoCapitalize="sentences"
          returnKeyType="next"
          onChangeText={"Set review"}
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

export default ItemReview;
