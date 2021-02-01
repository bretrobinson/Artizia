import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"

//import {LandingStackNavigator, MainStackNavigator} from './StackNavigator'
// import MyItemScreen from '../../screens/MyItemScreen'
import {LandingStackNavigator, MainStackNavigator,ProfileStackNavigator, AddItemStackNavigator ,ReviewSellerStackNavigator, MyItemStackNavigator, AnnouncementsStackNavigator, SignoutStackNavigator} from './StackNavigator'
import Signup from '../../screens/Signup'
// import ReviewSellerScreen from '../../screens/ReviewSellerScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=> {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='Home' component={ LandingStackNavigator} />
            <Drawer.Screen name= 'Signin' component={MainStackNavigator} />            
             <Drawer.Screen name = 'Profile' component={ProfileStackNavigator} />
            <Drawer.Screen name= 'Review Seller' component={ReviewSellerStackNavigator} />
            <Drawer.Screen name= 'Add Item' component={AddItemStackNavigator} />
            <Drawer.Screen name= 'MyItem' component={MyItemStackNavigator} />
            <Drawer.Screen name= 'Announcements' component={AnnouncementsStackNavigator} />
            <Drawer.Screen name= 'Signout' component={SignoutStackNavigator} />
        </Drawer.Navigator>

    )
}

export default DrawerNavigator