import React, {useContext} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import {Context as AuthContext} from '../../context/AuthContext'
import {FontAwesome, Entypo, AntDesign} from '@expo/vector-icons'
// import MyItemScreen from '../../screens/MyItemScreen'
import {LandingStackNavigator, 
    MainStackNavigator,
    ProfileStackNavigator, 
    AddItemStackNavigator ,
    ReviewSellerStackNavigator, 
    MyItemStackNavigator, 
    AnnouncementsStackNavigator, 
    SignoutStackNavigator,
    ItemDetailStackNavigator,
    AdvancedSearchStackNavigator
} from './StackNavigator'
import {MyTab} from './BottomNavigator'
// import ReviewSellerScreen from '../../screens/ReviewSellerScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=> {
    const{ state:{isSignedIn} } = useContext(AuthContext)
   

    if (!isSignedIn) {
        return (
        
            <Drawer.Navigator >
                <Drawer.Screen name='Home' component={ MyTab}
                       options={()=> ({
                        drawerIcon: ()=> <FontAwesome name='home' size={25} />
                    })} />
                {/* <Drawer.Screen name='Home' component={ LandingStackNavigator} /> */}
                <Drawer.Screen name= 'Signin' component={MainStackNavigator} 
                        options={()=> ({
                        drawerIcon: ()=> <Entypo name='login' size={25} />
                    })}/>            
                 {/* <Drawer.Screen name = 'Profile' component={ProfileStackNavigator} /> */}
                 <Drawer.Screen name= 'Advanced Search' component={AdvancedSearchStackNavigator}
                      options={()=> ({
                        drawerIcon: ()=> <FontAwesome name='search' size={25} />
                    })} />
                <Drawer.Screen name= 'Review Seller' component={ReviewSellerStackNavigator} />
                {/* <Drawer.Screen name= 'Add Item' component={AddItemStackNavigator} /> */}
                {/* <Drawer.Screen name= 'MyItem' component={MyItemStackNavigator} /> */}
                <Drawer.Screen name= 'Announcements' component={AnnouncementsStackNavigator} />
                {/* <Drawer.Screen name= 'Signout' component={SignoutStackNavigator} /> */}
                {/* <Drawer.Screen name= 'Item Detail' component={ItemDetailStackNavigator} /> */}
                
            </Drawer.Navigator>
    
        )
} else {
    return (
        
        <Drawer.Navigator >
            <Drawer.Screen name='Home' component={ MyTab}
                options={()=> ({
                drawerIcon: ()=> <FontAwesome name='home' size={25} />
            })} />
            {/* <Drawer.Screen name='Home' component={ LandingStackNavigator} /> */}
            {/* <Drawer.Screen name= 'Signin' component={MainStackNavigator} />             */}
            <Drawer.Screen name = 'Profile' component={ProfileStackNavigator} 
                options={()=> ({
                drawerIcon: ()=> <AntDesign name='profile' size={25} />
            })}/>
            <Drawer.Screen name= 'Advanced Search' component={AdvancedSearchStackNavigator}
              options={()=> ({
                drawerIcon: ()=> <FontAwesome name='search' size={25} />
            })} />             
            <Drawer.Screen name= 'Review Seller' component={ReviewSellerStackNavigator} />
            <Drawer.Screen name= 'Add Item' component={AddItemStackNavigator} />
            <Drawer.Screen name= 'MyItem' component={MyItemStackNavigator} />
            <Drawer.Screen name= 'Announcements' component={AnnouncementsStackNavigator} />
            <Drawer.Screen name= 'Signout' component={SignoutStackNavigator}
              options={()=> ({
                drawerIcon: ()=> <Entypo name='log-out' size={25} />
            })} />
            {/* <Drawer.Screen name= 'Item Detail' component={ItemDetailStackNavigator} /> */}
            
            
        </Drawer.Navigator>

    )
}
}

export default DrawerNavigator