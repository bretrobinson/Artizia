import React, {useContext, } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LandingStackNavigator, MainStackNavigator,AdvancedSearchStackNavigator, AddItemStackNavigator ,ReviewSellerStackNavigator, MyItemStackNavigator, MessageStackNavigator, SignoutStackNavigator} from './StackNavigator'
import {FontAwesome, Entypo, MaterialIcons, Ionicons} from '@expo/vector-icons'
import {Context as AuthContext} from '../../context/AuthContext'
import DefaultStyles from '../../constants/defaultStyles';

const Tab = createBottomTabNavigator();

const CreateBottomTabNavigator = ({name, isSignedIn, component, Icon, iconName})=>{

    // const{ state:{isSignedIn} } = useContext(AuthContext)
    return    (
      <Tab.Navigator 
        screenOptions={{
          headerStyle: DefaultStyles.headerStyle,
        }}
        tabBarOptions={{activeTintColor: 'orange',
        inactiveTintColor: 'gray',
        }} >
        <Tab.Screen 
        name = {name}
        component={component}
       options={()=> ({
            tabBarIcon: ()=> <Entypo name={iconName} size={25} />
        })}
        />


        {isSignedIn ? <>
            <Tab.Screen 
        name = "my Item"
        component={MyItemStackNavigator}
        options={()=> ({
            tabBarIcon: ()=> <Entypo name='list' size={25} />
        })}
        />
            <Tab.Screen 
        name = "Messages"
        component={MessageStackNavigator}
        options={()=> ({
            tabBarIcon: ()=> <Entypo name='chat' size={25} />
        })}
        />
        <Tab.Screen 
            name = "AddItem"
            component={AddItemStackNavigator}
            options={()=> ({
                tabBarIcon: ()=> <Entypo name='add-to-list' size={25} />
    })}
    />
    <Tab.Screen 
    name = "Signout"
    component={SignoutStackNavigator}
    options={()=> ({
        tabBarIcon: ()=> <Entypo name='log-out' size={25} />
    })}
    />
      </>  
    :     <>  
        {/* <Tab.Screen 
        name = "Advance Search"
        component={AdvancedSearchStackNavigator}
        options={()=> ({
            tabBarIcon: ()=> <Entypo name='magnifying-glass' size={25} />
        })}
        /> */}
     <Tab.Screen 
    name = "Signin"
    component={MainStackNavigator}
    options={()=> ({
        tabBarIcon: ()=> <Entypo name='login' size={25} />
    })}
    />
    </>
    }



    </Tab.Navigator>)

}

export default CreateBottomTabNavigator