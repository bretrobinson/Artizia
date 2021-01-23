import React, {useState,useEffect } from 'react';
import DeleteMyItemComponent from '../components/DeleteMyItem'
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ListMyItem = props => {
 const [userid,setUserId]=useState("");
 const [itemid,setItemdId]=useState("");
 useEffect(() => {
    setUserId(39);
    setItemdId(21);
 });


  return (
    <View >
     <View style={styles.Container}>
     <DeleteMyItemComponent userid={userid} itemid={itemid}/>
    </View>   
    
    </View>
  );
};


const styles = StyleSheet.create({
     Container: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 40
    
    }
  });
export default ListMyItem;