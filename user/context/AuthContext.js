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
        default:
            return state
    }
}

const signup = dispatch => async ({ email, password, fName, lName, location }) => {

    try {
        const response = await craftserverApi.post('/signup', {email, password, fName, lName, location})
        await AsyncStorage.setItem('token', response.data.token)
        
        dispatch({type: 'signin', payload: response.data.token})
        navigate('Landing')
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with signin'})
    }
}

const signin = dispatch => async ({ email, password }) => {

    try {
        const response = await craftserverApi.post('/signin', {email, password})
        await AsyncStorage.setItem('token', response.data.token)
        
        dispatch({type: 'signin', payload: response.data.token})
        navigate('Landing')
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with signin'})
    }
}

export const {Provider, Context } = createDataContext(
    authReducer,
    {signup, signin},
    {token:null, errorMessage: ''}
)