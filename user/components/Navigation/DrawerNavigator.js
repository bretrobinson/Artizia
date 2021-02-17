import React, {useContext} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import {Context as AuthContext} from '../../context/AuthContext'
import {FontAwesome, Entypo, AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons'
import MessageList from '../../screens/MessageList'
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
// import {ProfileStackNavigator} from './BottomNavigator'
import ProfileBottomNav from "./ProfileBottomNav";
import AnnouncementsBottomNav  from "./AnnouncementsBottomNav";


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

                <Drawer.Screen name= 'Announcements' component={AnnouncementsBottomNav} 
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

            <Drawer.Screen name = 'Profile' component={ProfileBottomNav} 
                options={()=> ({
                drawerIcon: ()=> <AntDesign name='profile' size={25} />
            })}/>
            <Drawer.Screen name= 'Advanced Search' component={AdvancedSearchStackNavigator}
              options={()=> ({
                drawerIcon: ()=> <FontAwesome name='search' size={25} />
            })} />             
            <Drawer.Screen name= 'Review Seller' component={ReviewSellerStackNavigator}
            options={()=> ({
                drawerIcon: ()=> <MaterialIcons name='rate-review' size={25} />
            })}
             />
            <Drawer.Screen name= 'Add Item' component={AddItemStackNavigator} 
            options={()=> ({
                drawerIcon: ()=> <Entypo name='add-to-list' size={25} />
    })}
            />
            <Drawer.Screen name= 'My Item' component={MyItemStackNavigator} 
            options={()=> ({
                drawerIcon: ()=> <Entypo name='list' size={25} />
    })}
            />
            <Drawer.Screen name='Messages' component={MessageStackNavigator}
                    options={()=> ({
                        drawerIcon: ()=> <Entypo name='message' size={25} />
            })} />
            <Drawer.Screen name= 'Announcements' component={AnnouncementsBottomNav} 
                    options={()=> ({
                        drawerIcon: ()=> <MaterialIcons name='announcement' size={25} />
                    })}/>
            <Drawer.Screen name= 'Sign out' component={SignoutStackNavigator}
              options={()=> ({
                drawerIcon: ()=> <Entypo name='log-out' size={25} />
            })} />
          
         
            
        </Drawer.Navigator>

    )
}
}

export default DrawerNavigator