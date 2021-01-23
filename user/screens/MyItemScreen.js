import React, {useState,useEffect } from 'react';
import DeleteMyItemComponent from '../components/DeleteMyItem'
import {  View, Text, StyleSheet, FlatList, ScrollView  } from 'react-native';
import SearchBar from '../components/SearchBar';
const ListMyItem = props => {
 const [userid,setUserId]=useState("");
 const [itemid,setItemdId]=useState("");
 useEffect(() => {
    setUserId(39);
    setItemdId(21);
 });


  return (
    <View >
    <View>
      
    <View style={ styles.screen }>
            <View style={ styles.searchBar }>
                <SearchBar
                   />
            </View>
            <ScrollView>
                
            </ScrollView>
          </View>
  
    </View>
     <View style={styles.screen}>
     <DeleteMyItemComponent userid={userid} itemid={itemid}/>
    </View>   
    
    </View>
  );
};



const styles = StyleSheet.create({
  screen: {
      // flex: 1,
      paddingTop: 20,
      paddingLeft: 20,
      paddingBottom: 20,
      // alignItems: 'center',
      // justifyContent: 'flex-start'
      backgroundColor: '#F5EEF8'
  },
  searchBar: {
      marginBottom: 20,
  }
});
export default ListMyItem;