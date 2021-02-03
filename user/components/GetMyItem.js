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
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.url }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.name}>{props.name}</Text>

              <Text style={styles.name}>{props.price}</Text>
              <Button title="Delete"  onPress={deleteHandler.bind(this, props.id)}></Button>
  
            </View>

         
          </View>
        </TouchableCmp>
      </View>

    </Card>

  );
};
const styles = StyleSheet.create({
  product: {
    height: 250,
    margin: 10,
    width: 300,
    alignItems: 'stretch'
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
    height: '40%',
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
  //   actions: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //     height: '23%',
  //     paddingHorizontal: 20
  //   }
});
export default GetMyItem;