import createDataContext from './createDataContext'
import {navigate} from '../RootNavigation'
import craftserverApi from '../api/craftserver'
import AsyncStorage from '@react-native-async-storage/async-storage'

const authReducer = (state, action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage:''}
        default:
            return state
    }
}

const clearErrorMessage = dispatch => ()=>{
    dispatch({type: 'clear_error_message'})
}

const signup = dispatch => async ({ email, password, fName, lName, location , payment}) => {

    try {
        if (email.length <1 || password.length<1){
            dispatch({type: 'add_error', payload: 'Enter email and password to go to signin'})
        } else {
            const response = await craftserverApi.post('/signup', {email, password, fName, lName, location, payment})
            await AsyncStorage.setItem('token', response.data.token)
            
            dispatch({type: 'signin', payload: response.data.token})
            navigate('Landing')
        }

    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with signup'})
    }
}

const signin = dispatch => async ({ email, password }) => {

    try {
        if (email.length <1 || password.length<1){
            dispatch({type: 'add_error', payload: 'Enter email and password or goto signup'})
        } else{
            const response = await craftserverApi.post('/signin', {email, password})
            // console.log(response.data)
            await AsyncStorage.setItem('token', response.data.token)        
            dispatch({type: 'signin', payload: response.data.token})
            navigate('Landing')
        }

       
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with signin'})
    }
}

export const {Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, clearErrorMessage},
    {token:null, errorMessage: ''}
)