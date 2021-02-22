import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from '@expo/vector-icons'
import Colors from '../../constants/Colors';
import DefaultStyles from '../../constants/defaultStyles';
import { Image } from 'react-native';

const Stack = createStackNavigator();

const CreateStackNavigator = ({ navigation, name, component }) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: DefaultStyles.headerStyle,
      headerTitleStyle: DefaultStyles.headerTitleStyle
    }}>
      <Stack.Screen name={name} component={component}
        options={{
          headerRight: () => <Feather name='menu' size={25} style={{ marginRight: 15 }} onPress={() => navigation.openDrawer()} />,
          headerLeft: () => <Image
            style={{ width: 50, height: 50 }}
            source={require('../../assets/logo.png')}
          />
        }} />
    </Stack.Navigator>
  );
}

export default CreateStackNavigator