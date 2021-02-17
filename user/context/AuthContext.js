
import createDataContext from './createDataContext'
import {navigate} from '../RootNavigation'
import craftserverApi from '../api/craftserver'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notification from 'expo-notifications';
import *as Permissions from 'expo-permissions';

const authReducer = (state, action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', user: action.payload.user, isSignedIn:true}
        case 'clear_error_message':
            return {...state, errorMessage:''}
        case 'signout':
            return { token: null, errorMessage:'', user: '', isSignedIn:false}
        default:
            return state
    }
}

const clearErrorMessage = dispatch => ()=>{
    dispatch({type: 'clear_error_message'})
}

    
    
  
const signup = dispatch => async ({ email, password, fName, lName, location , payment}) => {


///Permissions for notifications
    let PushTokenNotification;
  
    let statusObj=await Permissions.getAsync(Permissions.NOTIFICATIONS);
   
     Notification.getExpoPushTokenAsync();
  
       statusObj= await Permissions.askAsync(Permissions.NOTIFICATIONS);
           
     if(statusObj.status !=='granted'){
        PushTokenNotification=null; 
     }else{
        PushTokenNotification= (await Notification.getExpoPushTokenAsync()).data;
 
     }
    
    try {
        if (email.length <1 || password.length<1){
            dispatch({type: 'add_error', payload: 'Enter email and password'})
        } else {
            const response = await craftserverApi.post('/signup', {email, password, fName, lName, location, payment,PushTokenNotification})
        
            await AsyncStorage.setItem('token', response.data.token)
  
            // await AsyncStorage.setItem('user', response.data.user) 

            //////Local notification           
            dispatch({type: 'signin', payload: response.data})
            Notification.scheduleNotificationAsync({
                content:{
                  title:'Welcome',
                  body:'Your account was created successfully!',
                  
                },
                trigger:{
                  seconds:3
                }
              })
            // navigate('Home')
            navigate.goBack()
        }

    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with signup'})
    }
}

const signin = dispatch => async ({ email, password }) => {

    try {
        if (email.length <1 || password.length<1){
            dispatch({type: 'add_error', payload: 'Enter email and password'})
        } else{
            const response = await craftserverApi.post('/signin', {email, password})
          
            if(response.data.user.status.toLowerCase() === "active") {
                await AsyncStorage.setItem('token', response.data.token);
                // await AsyncStorage.setItem('user', response.data.user)
                dispatch({type: 'signin', payload: response.data})
                navigate.goBack()
            }if (response.data.user.status.toLowerCase() !== "active" && (new Date() - new Date(response.data.user.accountDisabled)) > 18000){
                await AsyncStorage.setItem('token', response.data.token);               
                dispatch({type: 'signin', payload: response.data})                
                await craftserverApi.put('/adminProfile', {email, status: 'Active'})
                navigate.goBack()
            }
            else {
                alert('Your account has been disabled please contact App Admintrator, Thank you')
                console.log(response.data.user.accountDisabled)
                navigate.goBack()
            }

        }

       
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with signin'})
    }
}

const signout = dispatch => async ()=>{
    await AsyncStorage.removeItem('token')
    dispatch({type: 'signout'})
    navigate('Home')
}

const editProfile = dispatch => async ({ email, fName, lName, location , payment}) => {
// console.log(email,location)

    try {
        if (email.length <1 ){
            dispatch({type: 'add_error', payload: 'Enter email and password'})
        } else {
        const response = await craftserverApi.patch('/profile', {email, fName, lName, location, payment})
        // await console.log(response.data)
            
            dispatch({type: 'signin', payload: response.data})
            navigate('Profile')
        }

    } catch (err) {
        console.log(err)
        // dispatch({type: 'add_error', payload: 'Something went wrong with signup'})
    }
}


export const {Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, clearErrorMessage, signout, editProfile},
    {token:null, errorMessage: '', user: '', isSignedIn: false}
)