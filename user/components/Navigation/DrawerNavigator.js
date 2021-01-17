import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"

//import {LandingStackNavigator, MainStackNavigator} from './StackNavigator'
import ReviewSellerScreen from '../../screens/ReviewSellerScreen'
import {LandingStackNavigator, MainStackNavigator, ReviewSellerStackNavigator} from './StackNavigator'
import Signup from '../../screens/Signup'
// import ReviewSellerScreen from '../../screens/ReviewSellerScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=> {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='Landing' component={ LandingStackNavigator} />
            <Drawer.Screen name= 'Signin' component={MainStackNavigator} />
             {/* <Drawer.Screen name = 'Signup' component={Signup} 
                    options={{
                        headerLeft: ()=> <Feather name='menu' size={25} onPress={()=>navigation.openDrawer()} />
                      }}/> */}
            <Drawer.Screen name= 'Review Seller' component={ReviewSellerStackNavigator}
            options={{
                headerLeft: ()=> <Feather name='menu' size={25} onPress={()=>navigation.openDrawer()} />
              }} />
        </Drawer.Navigator>

    )
}

export default DrawerNavigator