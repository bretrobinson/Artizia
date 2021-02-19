import React from 'react';
import {
  SafeAreaView, View, FlatList, StyleSheet, Text,
  Button, StatusBar, ScrollView, TouchableOpacity,
  TouchableNativeFeedback, KeyboardAvoidingView,Alert
} from 'react-native';
import * as actionGetItem from '../store/actions/DisplayMyItem';
import { useState, useEffect, useCallback, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GetMyItem from '../components/GetMyItem';
import colors from '../constants/Colors';
import { Context as AuthContext } from '../context/AuthContext'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { navigate } from '../RootNavigation';
import DefaultStyles from '../constants/defaultStyles';
import Colors from '../constants/Colors';

const MyItemScreen = () => {

  const { state } = useContext(AuthContext)

  if (state.user) {
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(true)
    const [error, setError] = useState();
    const UserItemreducer = useSelector(state => state.userItemsReducer.items);
    if (typeof UserItemreducer === "undefined"){
      console.log("value reducer undefined124>>" + UserItemreducer)
    }
  
    const dispatch = useDispatch();
    
    const loadProducts = useCallback(async () => {
    
      setError(null);
      setIsLoading(true);
      try {
      
      await actionGetItem.fetchitem(dispatch, state.user.idusers);
           
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }, [dispatch, setIsLoading, setError]);
  
    const deleteHandler = (id) => {
      Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
        { text: 'No', style: 'default' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => {
            console.log(id)
            dispatch(DeleteMyItem(state.user.idusers, id));
          }
        }
      ]);
    };
  
   useEffect(() => {
      //  setuserid(39)
 actionGetItem.fetchitem(dispatch,state.user.idusers);
  
     setRefreshing(false)
   }, [dispatch, loadProducts]);
    return (

      <View style={DefaultStyles.screenContainer}>

        <Ionicons name="add" style={DefaultStyles.addItemIcon} size={55} color={Colors.saveButtonColor}
          onPress={() => navigate('AddItem')}
        />

        <FlatList
          data={UserItemreducer}
          keyExtractor={item => item.id.toString()}
          renderItem={itemData => (
            <GetMyItem
              id={itemData.item.id}
              name={itemData.item.name}
              price={itemData.item.price}
              url={itemData.item.imageUrl}
              desc={itemData.item.desc}

            >
            </GetMyItem>
          )}

        >
        </FlatList>



      </View>
    );
  } else return <Text>Please Login.</Text>

};

const styles = StyleSheet.create({
  // product: {
  //   height: 300,



  // },
  // screen: {
  //   flex: 1,
  //   flexDirection: 'column'
  // },
  // additemicon: {
  //     width:50,
  //     marginLeft:300
  // },
  // buttonContainer: {

  //   marginVertical: 10,
  //   justifyContent: 'space-between',
  //   padding: 1,
  //   marginLeft: 200
  // },
  // touchable: {
  //   borderRadius: 10,
  //   overflow: 'hidden'
  // },
  // imageContainer: {
  //   width: '100%',
  //   height: '60%',
  //   borderTopLeftRadius: 10,
  //   borderTopRightRadius: 10,
  //   overflow: 'hidden'
  // },
  // image: {
  //   width: '100%',
  //   height: '100%'
  // },
  // details: {
  //   alignItems: 'center',
  //   height: '45%',

  // },
  // title: {
  //   fontFamily: 'open-sans-bold',
  //   fontSize: 18,
  //   marginVertical: 2
  // },
  // price: {
  //   fontFamily: 'open-sans',
  //   fontSize: 14,
  //   color: '#888'
  // },
  // actions: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   height: '23%',
  //   paddingHorizontal: 20
  // }
});


export default MyItemScreen;