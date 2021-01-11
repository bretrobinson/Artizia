import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from '../../screens/Landing'
import Signup from '../../screens/Signup'
import Signin from '../../screens/Signin'

const Stack = createStackNavigator();
const MainStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    );
  }

  const LandingStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Landing" component={Landing} />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator, LandingStackNavigator };