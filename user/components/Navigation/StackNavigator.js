import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Feather} from '@expo/vector-icons'

import Landing from '../../screens/Landing'
import Signup from '../../screens/Signup'
import Signin from '../../screens/Signin'


const Stack = createStackNavigator();
const MainStackNavigator = ({navigation}) => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Signin" component={Signin}         
        options={{
          headerLeft: ()=> <Feather name='menu' size={25} onPress={()=>navigation.openDrawer()} />
        }}
         />
        <Stack.Screen name="Signup" component={Signup}
        options={{
                  headerLeft: ()=> <Feather name='menu' size={25} onPress={()=>navigation.openDrawer()} />
                }}  
         />
        
      </Stack.Navigator>
    );
  }

  const LandingStackNavigator = ({navigation}) => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Landing" component={Landing}
        options={{
          headerLeft: ()=> <Feather name='menu' size={25} onPress={()=>navigation.openDrawer()} />
        }} />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator, LandingStackNavigator };