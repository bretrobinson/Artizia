import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"

//import {LandingStackNavigator, MainStackNavigator} from './StackNavigator'
<<<<<<< HEAD
import MyItemScreen from '../../screens/MyItemScreen'
import {LandingStackNavigator, MainStackNavigator,ProfileStackNavigator, AddItemStackNavigator ,ReviewSellerStackNavigator} from './StackNavigator'
=======
import ReviewSellerScreen from '../../screens/ReviewSellerScreen'
<<<<<<< HEAD
import {LandingStackNavigator, 
    MainStackNavigator,ProfileStackNavigator, 
    AddItemStackNavigator ,
    ReviewSellerStackNavigator, 
    MyItemStackNavigator,
    AnnouncementsStackNavigator
} from './StackNavigator'
=======
import {LandingStackNavigator, MainStackNavigator,ProfileStackNavigator, AddItemStackNavigator ,ReviewSellerStackNavigator, MyItemStackNavigator} from './StackNavigator'
>>>>>>> 2ec4b0f060817dcba95bb0c370c3e8ca4726ff40
>>>>>>> 4d2b14d71361581641c564073e741b71ecb9ff4c
import Signup from '../../screens/Signup'
// import ReviewSellerScreen from '../../screens/ReviewSellerScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=> {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='Landing' component={ LandingStackNavigator} />
            <Drawer.Screen name= 'Signin' component={MainStackNavigator} />            
             <Drawer.Screen name = 'Profile' component={ProfileStackNavigator} />
            <Drawer.Screen name= 'Review Seller' component={ReviewSellerStackNavigator} />
            <Drawer.Screen name= 'Add Item' component={AddItemStackNavigator} />
<<<<<<< HEAD
            <Drawer.Screen name= 'MyItem' component={MyItemScreen} />
       
=======
            <Drawer.Screen name= 'My Items' component={MyItemStackNavigator} />
<<<<<<< HEAD
            <Drawer.Screen name= 'Announcements' component={AnnouncementsStackNavigator} />
=======
>>>>>>> 2ec4b0f060817dcba95bb0c370c3e8ca4726ff40
>>>>>>> 4d2b14d71361581641c564073e741b71ecb9ff4c
        </Drawer.Navigator>

    )
}

export default DrawerNavigator