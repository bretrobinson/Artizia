import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Feather} from '@expo/vector-icons'

const Stack = createStackNavigator();

const CreateStackNavigator = ({navigation, name, component}) => {
    return (
      <Stack.Navigator >
        <Stack.Screen name={name} component={component}
        options={{
          headerRight: ()=> <Feather name='menu' size={25} onPress={()=>navigation.openDrawer()} />
        }} />
      </Stack.Navigator>
    );
  }

  export default CreateStackNavigator