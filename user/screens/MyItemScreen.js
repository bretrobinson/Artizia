import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button, StatusBar, ScrollView } from 'react-native';
import * as actionGetItem from '../store/actions/DisplayMyItem';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GetMyItem from '../components/GetMyItem';
import Colors from '../constants/Colors';
const MyItemScreen = () => {

  const UserItemreducer = useSelector(state => state.userItemsReducer.items);
  

  console.log(UserItemreducer);

  const dispatch = useDispatch();

  useEffect(() => {

    //  setuserid(39)
    actionGetItem.fetchitem(dispatch,39);

  }, [dispatch]);
  return (

    <View style={styles.container}>
      <FlatList
        vertical
        data={UserItemreducer}
        keyExtractor={item => item.id.toString()}
        renderItem={itemData => (
          <GetMyItem
            id={itemData.item.id}
            name={itemData.item.name}
            price={itemData.item.price}
            url={itemData.item.url}
            userid={39}

          >
           

          </GetMyItem>


        )}

      />

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 50,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  separatorLine: {
    height: 1,
    backgroundColor: 'plum',
    paddingTop: 2,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  footer: {
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});

export default MyItemScreen;