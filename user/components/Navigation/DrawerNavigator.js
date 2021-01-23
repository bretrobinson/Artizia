import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"

//import {LandingStackNavigator, MainStackNavigator} from './StackNavigator'
import ReviewSellerScreen from '../../screens/ReviewSellerScreen'
import {LandingStackNavigator, MainStackNavigator,ProfileStackNavigator, AddItemStackNavigator ,ReviewSellerStackNavigator, MyItemStackNavigator} from './StackNavigator'
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
            <Drawer.Screen name= 'My Items' component={MyItemStackNavigator} />
        </Drawer.Navigator>

    )
}

export default DrawerNavigator