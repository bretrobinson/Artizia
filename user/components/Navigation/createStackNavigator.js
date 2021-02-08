import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Feather} from '@expo/vector-icons'
import Colors from '../../constants/Colors'

const Stack = createStackNavigator();

const CreateStackNavigator = ({navigation, name, component}) => {
    return (
      <Stack.Navigator screenOptions={{ headerStyle: {
        backgroundColor: Colors.accent2,
      },}}>
        <Stack.Screen name={name} component={component}
        options={{
          headerRight: ()=> <Feather name='menu' size={25} style={{marginRight:15}} onPress={()=>navigation.openDrawer()} />
        }} />
      </Stack.Navigator>
    );
  }

  export default CreateStackNavigator