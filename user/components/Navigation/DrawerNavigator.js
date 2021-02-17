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
import {LandingTab, SigininTab, ReviewSellerTab, MyItemTab, MessageTab, AdvanceSearchTab} from './BottomNavigator'
// import {ProfileStackNavigator} from './BottomNavigator'
import ProfileBottomNav from "./ProfileBottomNav";
import AnnouncementsBottomNav  from "./AnnouncementsBottomNav";


const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=> {
    const{ state:{isSignedIn} } = useContext(AuthContext)
   

    if (!isSignedIn) {
        return (
        
            <Drawer.Navigator  drawerPosition="right">
                <Drawer.Screen name='Home' component={LandingTab} 
                       options={()=> ({
                        drawerIcon: ()=> <FontAwesome name='home' size={25} />
                    })} />
{/* 
                <Drawer.Screen name= 'Signin' component={SigininTab} 
                        options={()=> ({
                        drawerIcon: ()=> <Entypo name='login' size={25} />
                    })}/>             */}

                 <Drawer.Screen name= 'Advanced Search' component={AdvanceSearchTab}
                      options={()=> ({
                        drawerIcon: ()=> <Entypo name='magnifying-glass' size={25} />
                    })} />
                <Drawer.Screen name= 'Review Seller' component={ReviewSellerTab}
                        options={()=> ({
                            drawerIcon: ()=> <Entypo name='new-message' size={25} />
                        })} />

                <Drawer.Screen name= 'Announcements' component={AnnouncementsBottomNav} 
                        options={()=> ({
                            drawerIcon: ()=> <Entypo name='news' size={25} />
                        })}/>
                

                
            </Drawer.Navigator>
    
        )
} else {
    return (
        
        <Drawer.Navigator drawerPosition="right">
            <Drawer.Screen name='Home' component={LandingTab}
                options={()=> ({
                drawerIcon: ()=> <FontAwesome name='home' size={25} />
            })} />

            <Drawer.Screen name = 'Profile' component={ProfileBottomNav} 
                options={()=> ({
                drawerIcon: ()=> <AntDesign name='profile' size={25} />
            })}/>
            <Drawer.Screen name= 'Advanced Search' component={AdvanceSearchTab}
              options={()=> ({
                drawerIcon: ()=> <Entypo name='magnifying-glass' size={25} />
            })} />             
            <Drawer.Screen name= 'Review Seller' component={ReviewSellerTab}
            options={()=> ({
                drawerIcon: ()=> <Entypo name='new-message' size={25} />
            })}
             />
            {/* <Drawer.Screen name= 'Add Item' component={AddItemStackNavigator} 
            options={()=> ({
                drawerIcon: ()=> <Entypo name='add-to-list' size={25} />
    })}
            /> */}
            {/* <Drawer.Screen name= 'My Item' component={MyItemTab} 
            options={()=> ({
                drawerIcon: ()=> <Entypo name='list' size={25} />
    })}
            /> */}
            {/* <Drawer.Screen name='Messages' component={MessageTab}
                    options={()=> ({
                        drawerIcon: ()=> <Entypo name='chat' size={25} />
            })} /> */}
            <Drawer.Screen name= 'Announcements' component={AnnouncementsBottomNav} 
                    options={()=> ({
                        drawerIcon: ()=> <Entypo name='news' size={25} />
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