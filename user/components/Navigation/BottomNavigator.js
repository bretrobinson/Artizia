import React, {useContext, } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LandingStackNavigator, MainStackNavigator,ProfileStackNavigator, AddItemStackNavigator ,ReviewSellerStackNavigator, MyItemStackNavigator, AnnouncementsStackNavigator, SignoutStackNavigator} from './StackNavigator'
import {FontAwesome, Entypo, MaterialIcons, Ionicons} from '@expo/vector-icons'
import {Context as AuthContext} from '../../context/AuthContext'
const Tab = createBottomTabNavigator();

const MyTab = ()=>{

    const{ state:{isSignedIn} } = useContext(AuthContext)
    return    (
    <Tab.Navigator 
        initialRouteName= "Home"
        > 
        <Tab.Screen 
        name = "Home"
        component={LandingStackNavigator}
       options={()=> ({
            tabBarIcon: ()=> <FontAwesome name='home' size={25} />
        })}
        />
        <Tab.Screen 
        name = "ReviewSeller"
        component={ReviewSellerStackNavigator}
        options={()=> ({
            tabBarIcon: ()=> <MaterialIcons name='rate-review' size={25} />
        })}
        />

        {isSignedIn ? 
        <Tab.Screen 
            name = "AddItem"
            component={AddItemStackNavigator}
            options={()=> ({
                tabBarIcon: ()=> <Ionicons name='add-circle' size={25} />
    })}
    />
        
    :        <Tab.Screen 
    name = "Sigin"
    component={MainStackNavigator}
    options={()=> ({
        tabBarIcon: ()=> <Entypo name='login' size={25} />
    })}
    />
    }



        </Tab.Navigator>)

}

export {MyTab}