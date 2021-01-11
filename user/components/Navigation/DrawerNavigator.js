import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"

import {LandingStackNavigator, MainStackNavigator} from './StackNavigator'
import { exp } from "react-native-reanimated";

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=> {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Landing' component={ LandingStackNavigator} />
            <Drawer.Screen name= 'Signin' component={MainStackNavigator} />
            <Drawer.Screen name= 'Signup' component={MainStackNavigator} />
        </Drawer.Navigator>

    )
}

export default DrawerNavigator