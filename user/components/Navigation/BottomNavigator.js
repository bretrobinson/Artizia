import React, {useContext, } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LandingStackNavigator, MainStackNavigator,AdvancedSearchStackNavigator, AddItemStackNavigator ,ReviewSellerStackNavigator, MyItemStackNavigator, MessageStackNavigator, SignoutStackNavigator, AnnouncementsStackNavigator} from './StackNavigator'
import {FontAwesome, Entypo, MaterialIcons, Ionicons} from '@expo/vector-icons'
import {Context as AuthContext} from '../../context/AuthContext'
import CreateBottomTabNavigator from './createBottomNavigator'
const Tab = createBottomTabNavigator();

const LandingTab = ()=>{

    const{ state:{isSignedIn} } = useContext(AuthContext)
    return    (
    <CreateBottomTabNavigator name='Home'  component={LandingStackNavigator} Icon='MaterialIcons' iconName='home' isSignedIn={isSignedIn} />
           
        )

}
const ReviewSellerTab = ()=>{

    const{ state:{isSignedIn} } = useContext(AuthContext)
    return    (
    <CreateBottomTabNavigator name='Review'  component={ReviewSellerStackNavigator} Icon='MaterialIcons' iconName='new-message' isSignedIn={isSignedIn} />
           
        )

}

const MessageTab = ()=>{

    const{ state:{isSignedIn} } = useContext(AuthContext)
    return    (
    <CreateBottomTabNavigator name='Message'  component={MessageStackNavigator} Icon='Entypo' iconName='chat' isSignedIn={isSignedIn} />           
        )
}

const AdvanceSearchTab = ()=>{

    const{ state:{isSignedIn} } = useContext(AuthContext)
    return    (
    <CreateBottomTabNavigator name='Advance Search'  component={AdvancedSearchStackNavigator} Icon='FontAwesome' iconName='magnifying-glass' isSignedIn={isSignedIn} />           
        )
}



export {
    LandingTab,
    ReviewSellerTab,
    MessageTab,
    AdvanceSearchTab,
   
}