import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LandingStackNavigator, MainStackNavigator,ProfileStackNavigator, AddItemStackNavigator ,ReviewSellerStackNavigator, MyItemStackNavigator, AnnouncementsStackNavigator, SignoutStackNavigator} from './StackNavigator'
import {FontAwesome, Ionicons, MaterialIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const MyTab = ()=>{
    return    (
    <Tab.Navigator 
        initialRouteName= "Home"
        > 
        <Tab.Screen 
        name = "Home"
        component={LandingStackNavigator}
       options={()=> ({
            tabBarIcon: ()=> <FontAwesome name='home' size={25} />
        })}
        />
        <Tab.Screen 
        name = "ReviewSeller"
        component={ReviewSellerStackNavigator}
        options={()=> ({
            tabBarIcon: ()=> <MaterialIcons name='rate-review' size={25} />
        })}
        />
        <Tab.Screen 
        name = "AddItem"
        component={AddItemStackNavigator}
        options={()=> ({
            tabBarIcon: ()=> <Ionicons name='add-circle' size={25} />
        })}
        />


        </Tab.Navigator>)

}

export {MyTab}