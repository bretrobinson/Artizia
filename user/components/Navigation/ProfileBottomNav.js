import React, {useContext, } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LandingStackNavigator, MainStackNavigator,AdvancedSearchStackNavigator,ProfileStackNavigator, AddItemStackNavigator ,ReviewSellerStackNavigator, MyItemStackNavigator, MessageStackNavigator, SignoutStackNavigator} from './StackNavigator'
import {FontAwesome, Entypo, MaterialIcons, AntDesign} from '@expo/vector-icons'
import {Context as AuthContext} from '../../context/AuthContext'
const Tab = createBottomTabNavigator();

const ProfileBottomNav = ()=>{

    const{ state:{isSignedIn} } = useContext(AuthContext)
    return    (
    <Tab.Navigator 
        initialRouteName= "Profile"
        > 
        <Tab.Screen 
        name = "Profile"
        component={ProfileStackNavigator}
       options={()=> ({
            tabBarIcon: ()=> <AntDesign name='profile' size={25} />
        })}
        />
        <Tab.Screen 
        name = "my Item"
        component={MyItemStackNavigator}
        options={()=> ({
            tabBarIcon: ()=> <Entypo name='list' size={25} />
        })}
        />

        {isSignedIn ? <>
            <Tab.Screen 
        name = "Messages"
        component={MessageStackNavigator}
        options={()=> ({
            tabBarIcon: ()=> <Entypo name='message' size={25} />
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
    :        <Tab.Screen 
    name = "Signin"
    component={MainStackNavigator}
    options={()=> ({
        tabBarIcon: ()=> <Entypo name='login' size={25} />
    })}
    />
    }



        </Tab.Navigator>)

}

export default  ProfileBottomNav