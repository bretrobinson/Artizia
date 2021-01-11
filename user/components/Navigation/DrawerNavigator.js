import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"

import {LandingStackNavigator, MainStackNavigator} from './StackNavigator'
import Signup from '../../screens/Signup'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=> {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Landing' component={ LandingStackNavigator} />
            <Drawer.Screen name= 'Signin' component={MainStackNavigator} />
            <Drawer.Screen name = 'Signup' component={Signup} />
        </Drawer.Navigator>

    )
}

export default DrawerNavigator