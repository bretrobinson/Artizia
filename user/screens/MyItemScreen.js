import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, 
  Button, StatusBar, ScrollView, TouchableOpacity,
  TouchableNativeFeedback } from 'react-native';
import * as actionGetItem from '../store/actions/DisplayMyItem';
import { useState, useEffect,useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GetMyItem from '../components/GetMyItem';
import Colors from '../constants/Colors';

const MyItemScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
const [refreshing,setRefreshing]=useState(true)
const [error, setError] = useState();
  const UserItemreducer = useSelector(state => state.userItemsReducer.items);
  const dispatch = useDispatch();
 
  const loadProducts = useCallback(async () => {
    console.log("loadProducts>>" )
    setError(null);
    setIsLoading(true);
    try {
      await  actionGetItem.fetchitem(dispatch,39);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading, setError]);
  console.log(UserItemreducer);
  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          console.log(id)
        dispatch(DeleteMyItem(39,id));
        }
      }
    ]);
  };
 
  useEffect(() => {
    //  setuserid(39)
    actionGetItem.fetchitem(dispatch,39);
    setRefreshing(false)
  }, [dispatch,loadProducts]);
  return (
    
    <FlatList
      data={UserItemreducer}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <GetMyItem
        id={itemData.item.id}
        name={itemData.item.name}
        price={itemData.item.price}
        url={itemData.item.url}
        userid={39}
        
        >
           <View style={styles.buttonContainer}>
             
             <Button title="Delete" onPress={deleteHandler.bind(this,itemData.item.id)}></Button>
            
             </View>
        
        </GetMyItem>
      )}
    />
   
  );
};

const styles = StyleSheet.create({
  product: {
    height: 300,
    margin: 20,
    alignItems: 'stretch',
   

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
    height: '45%',
   
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    marginVertical: 2
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20
  }
});


export default MyItemScreen;