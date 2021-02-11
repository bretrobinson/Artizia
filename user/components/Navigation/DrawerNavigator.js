import React, {useContext} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import {Context as AuthContext} from '../../context/AuthContext'
import {FontAwesome, Entypo, AntDesign, MaterialIcons} from '@expo/vector-icons'
// import MyItemScreen from '../../screens/MyItemScreen'
import {LandingStackNavigator, 
    MainStackNavigator,
    ProfileStackNavigator, 
    AddItemStackNavigator ,
    ReviewSellerStackNavigator, 
    MyItemStackNavigator, 
    AnnouncementsStackNavigator, 
    SignoutStackNavigator,
    MessageStackNavigator,
    AdvancedSearchStackNavigator
} from './StackNavigator'
import {MyTab} from './BottomNavigator'
import MessageList from '../../screens/MessageList'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=> {
    const{ state:{isSignedIn} } = useContext(AuthContext)
   

    if (!isSignedIn) {
        return (
        
            <Drawer.Navigator  drawerPosition="right">
                <Drawer.Screen name='Home' component={ MyTab} 
                       options={()=> ({
                        drawerIcon: ()=> <FontAwesome name='home' size={25} />
                    })} />

                <Drawer.Screen name= 'Signin' component={MainStackNavigator} 
                        options={()=> ({
                        drawerIcon: ()=> <Entypo name='login' size={25} />
                    })}/>            

                 <Drawer.Screen name= 'Advanced Search' component={AdvancedSearchStackNavigator}
                      options={()=> ({
                        drawerIcon: ()=> <FontAwesome name='search' size={25} />
                    })} />
                <Drawer.Screen name= 'Review Seller' component={ReviewSellerStackNavigator}
                        options={()=> ({
                            drawerIcon: ()=> <MaterialIcons name='rate-review' size={25} />
                        })} />

                <Drawer.Screen name= 'Announcements' component={AnnouncementsStackNavigator} 
                        options={()=> ({
                            drawerIcon: ()=> <MaterialIcons name='announcement' size={25} />
                        })}/>
                

                
            </Drawer.Navigator>
    
        )
} else {
    return (
        
        <Drawer.Navigator drawerPosition="right">
            <Drawer.Screen name='Home' component={ MyTab}
                options={()=> ({
                drawerIcon: ()=> <FontAwesome name='home' size={25} />
            })} />

            <Drawer.Screen name = 'Profile' component={ProfileStackNavigator} 
                options={()=> ({
                drawerIcon: ()=> <AntDesign name='profile' size={25} />
            })}/>
            <Drawer.Screen name= 'Advanced Search' component={AdvancedSearchStackNavigator}
              options={()=> ({
                drawerIcon: ()=> <FontAwesome name='search' size={25} />
            })} />             
            <Drawer.Screen name= 'Review Seller' component={ReviewSellerStackNavigator}
             />
            <Drawer.Screen name= 'Add Item' component={AddItemStackNavigator} />
            <Drawer.Screen name= 'MyItem' component={MyItemStackNavigator} />
            <Drawer.Screen name= 'Announcements' component={AnnouncementsStackNavigator} 
                    options={()=> ({
                        drawerIcon: ()=> <MaterialIcons name='announcement' size={25} />
                    })}/>
            <Drawer.Screen name= 'Signout' component={SignoutStackNavigator}
              options={()=> ({
                drawerIcon: ()=> <Entypo name='log-out' size={25} />
            })} />
          
          <Drawer.Screen name='Messages' component={MessageStackNavigator} />
            
        </Drawer.Navigator>

    )
}
}

export default DrawerNavigator