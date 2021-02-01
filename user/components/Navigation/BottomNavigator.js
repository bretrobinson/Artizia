import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LandingStackNavigator, MainStackNavigator,ProfileStackNavigator, AddItemStackNavigator ,ReviewSellerStackNavigator, MyItemStackNavigator, AnnouncementsStackNavigator, SignoutStackNavigator} from './StackNavigator'
const Tab = createBottomTabNavigator();

const MyTab = ()=>{
    return    (
    <Tab.Navigator 
        initialRouteName= "Home"
        > 
        <Tab.Screen 
        name = "Home"
        component={LandingStackNavigator}
        />
        <Tab.Screen 
        name = "ReviewSeller"
        component={ReviewSellerStackNavigator}
        />
        <Tab.Screen 
        name = "AddItem"
        component={AddItemStackNavigator}
        />


        </Tab.Navigator>)

}

export {MyTab}