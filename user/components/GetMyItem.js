import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,Button,Alert
} from 'react-native';
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import Card from './Card';
import Colors from '../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import {DeleteMyItem} from '../store/actions/DeleteMyItem'
const GetMyItem = props => {

  const [userid, setuserid] = useState("");

  const dispatch = useDispatch();
 
  const DeleteItem = props => {
    console.log('FSDFDSFD');
    
  }
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }


  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          console.log(props.id)
        dispatch(DeleteMyItem(39,props.id));
        }
      }
    ]);
  };
  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
               <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.url }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.name}>{props.name}</Text>
              <Text style={styles.desc}>{props.desc}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
              <View style={styles.buttonContainer}>
              <TouchableCmp>
              <MaterialCommunityIcons  name="delete-forever" size={45} color="black" onPress={deleteHandler.bind(this, props.id)}/>
              </TouchableCmp>
              </View>
          
            </View>
                   
          </View>
          
      </View>

    </Card>

  );
};
const styles = StyleSheet.create({
  product: {
    marginTop:30,
    height: 350,
    width:350,
    marginLeft:33
   
  },
  buttonContainer:{
    marginVertical: 10,
    justifyContent: 'space-between',
    padding:1,
    marginLeft:200
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '30%',
    padding: 5
  },
  name: {
    // fontFamily: 'open-sans-bold',
    fontSize: 18,
    // color: Colors.accent,
    marginVertical: 2
  },
  price: {
    // fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888'
  },
  desc: {
    // fontFamily: 'open-sans-bold',
    fontSize: 18,
    // color: Colors.accent,
    marginVertical: 2
  },

});
export default GetMyItem;