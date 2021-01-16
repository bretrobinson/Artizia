import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"

import {LandingStackNavigator, MainStackNavigator} from './StackNavigator'
import ReviewSellerScreen from '../../screens/ReviewSellerScreen'
import Signup from '../../screens/Signup'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=> {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Landing' component={ LandingStackNavigator} />
            <Drawer.Screen name='ReviewSellerScreen' component={ReviewSellerScreen}/>
            <Drawer.Screen name= 'Signin' component={MainStackNavigator} />
             <Drawer.Screen name = 'Signup' component={Signup} 
                    options={{
                        headerLeft: ()=> <Feather name='menu' size={25} onPress={()=>navigation.openDrawer()} />
                      }}/>
        </Drawer.Navigator>

    )
}

export default DrawerNavigator