import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Feather} from '@expo/vector-icons'
import Profile from '../../screens/Profile'
import Landing from '../../screens/Landing'
import Signup from '../../screens/Signup'
import Signin from '../../screens/Signin'
import ReviewSeller from '../../screens/ReviewSellerScreen'
import CreateStackNavigator from './createStackNavigator'
import AddItem from '../../screens/AddItemScreen'
import MyItem from '../../screens/MyItemScreen'
import Announcements from '../../screens/Announcements'
import Signout from '../../screens/Signout'
import ItemDetail from '../../screens/ItemDetail'
import AdvancedSearch from "../../screens/AdvancedSearch";
import Colors from '../../constants/Colors'


const Stack = createStackNavigator();
const MainStackNavigator = ({navigation}) => {
    return (
      <Stack.Navigator screenOptions={{ headerStyle: {
        backgroundColor: Colors.accent2,
      },}} >
        <Stack.Screen name="Signin" component={Signin}         
        options={{
          headerRight: ()=> <Feather name='menu' size={25} style={{marginRight:15}} onPress={()=>navigation.openDrawer()} />
        }}
         />
        <Stack.Screen name="Signup" component={Signup}
        options={{
                  headerRight: ()=> <Feather name='menu' size={25} style={{marginRight:15}} onPress={()=>navigation.openDrawer()} />
                }}  
         />
        
      </Stack.Navigator >
    );
  }

  const LandingStackNavigator = ({navigation}) => {
    return (
      <Stack.Navigator screenOptions={{ headerStyle: {
        backgroundColor: Colors.accent2,
      },}}>
        <Stack.Screen name="Craft Sell" component={Landing} 
        options={{
          headerRight: ()=> <Feather name='menu' size={25} style={{marginRight:15}}  onPress={()=>navigation.openDrawer()} />
        }} />
        <Stack.Screen name="ItemDetail" component={ItemDetail}
        options={{
          headerRight: ()=> <Feather name='menu' size={25} style={{marginRight:15}} onPress={()=>navigation.openDrawer()} />
        }} />
      </Stack.Navigator>
    );
  }

  const ReviewSellerStackNavigator = ({navigation}) => {
    return (
      <CreateStackNavigator navigation={navigation} name="Review Seller" component={ReviewSeller} />
    );
  }
  const ProfileStackNavigator = ({navigation}) => {
    return (
<CreateStackNavigator navigation={navigation} name="Profile" component={Profile} />
    );
  }
  const AddItemStackNavigator = ({navigation}) => {
    return (
<CreateStackNavigator navigation={navigation} name="Add Item" component={AddItem} />
    );
  }

  const MyItemStackNavigator = ({navigation}) => {
    return (
<CreateStackNavigator navigation={navigation} name="My Item" component={MyItem} />
    );
  }
  const AnnouncementsStackNavigator = ({navigation}) => {
    return (
<CreateStackNavigator navigation={navigation} name="Announcements" component={Announcements} />
    );
  }

  const SignoutStackNavigator = ({navigation}) => {
    return (
<CreateStackNavigator navigation={navigation} name="signout" component={Signout} />
    );
  }
//   const ItemDetailStackNavigator = ({navigation}) => {
//     return (
// <CreateStackNavigator navigation={navigation} name="ItemDetail" component={ItemDetail} />
//     );
//   }
  
const AdvancedSearchStackNavigator = ({navigation}) => {
  return (
    <CreateStackNavigator navigation={navigation} name="Advanced Search" component={AdvancedSearch} />
  );
}
  
  export { 
    MainStackNavigator, 
    LandingStackNavigator, 
    ReviewSellerStackNavigator, 
    ProfileStackNavigator, 
    AddItemStackNavigator,
    MyItemStackNavigator,
  SignoutStackNavigator,
  AnnouncementsStackNavigator,
    AdvancedSearchStackNavigator
   };