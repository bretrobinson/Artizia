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


const Stack = createStackNavigator();
const MainStackNavigator = ({navigation}) => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Signin" component={Signin}         
        options={{
          headerLeft: ()=> <Feather name='menu' size={25} onPress={()=>navigation.openDrawer()} />
        }}
         />
        <Stack.Screen name="Signup" component={Signup}
        options={{
                  headerLeft: ()=> <Feather name='menu' size={25} onPress={()=>navigation.openDrawer()} />
                }}  
         />
        
      </Stack.Navigator>
    );
  }

  const LandingStackNavigator = ({navigation}) => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Craft Sell" component={Landing}
        options={{
          headerLeft: ()=> <Feather name='menu' size={25} onPress={()=>navigation.openDrawer()} />
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
  const ItemDetailStackNavigator = ({navigation}) => {
    return (
<CreateStackNavigator navigation={navigation} name="ItemDetail" component={ItemDetail} />
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
  ItemDetailStackNavigator  };