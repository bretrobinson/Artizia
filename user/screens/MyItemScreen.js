import React from 'react';
import {
  SafeAreaView, View, FlatList, StyleSheet, Text,
  Button, StatusBar, ScrollView, TouchableOpacity,
  TouchableNativeFeedback, KeyboardAvoidingView, Alert
} from 'react-native';
import * as actionGetItem from '../store/actions/DisplayMyItem';
import { useState, useEffect, useCallback, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GetMyItem from '../components/GetMyItem';
import colors from '../constants/Colors';
import { Context as AuthContext } from '../context/AuthContext'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
//import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { navigate } from '../RootNavigation';
import DefaultStyles from '../constants/defaultStyles';
import Colors from '../constants/Colors';

const MyItemScreen = (props) => {

  const { state } = useContext(AuthContext)

  if (state.user) {
    const [isLoading, setIsLoading] = useState(true);
    const [isDetele, setDelete] = useState(false);
    const [refreshing, setRefreshing] = useState(true)
    const [error, setError] = useState();

    const dispatch = useDispatch();
    const UserItemreducer = useSelector(state => state.userItemsReducer.items);

    useEffect(() => {

      setIsLoading(false)
      props.navigation.addListener('focus', () => {
        actionGetItem.fetchitem(dispatch, state.user.idusers);
      });
      setRefreshing(false)
    }, [dispatch]);
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
  msg: {
    flex: 1,
    marginTop: 88,
    justifyContent: 'center',
    height: 5,
    alignItems: 'center',


  },

});


export default MyItemScreen;