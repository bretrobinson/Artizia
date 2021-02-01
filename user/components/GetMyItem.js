import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

import Card from './Card';
import DeleteMyItemComponent from '../components/DeleteMyItem';


const GetMyItem = props => {
  const [userid, setuserid] = useState("");


  return (

      <View >
      <Text >Get ITEM</Text>
        <Text >{props.name}</Text>
      
      </View>

 
  )
}
export default GetMyItem;