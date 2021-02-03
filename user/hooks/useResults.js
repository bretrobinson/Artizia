import {useState, useEffect} from 'react'
import craftserverApi from '../api/craftserver'

export default ()=>{

    const [profile, setProfile] = useState({})

    const fetchProfile = async () =>{

        try {
         const response = await craftserverApi.get('/profile') 
         console.log(response.data)  
         setProfile(response.data)

        } catch (err){
            console.log(err)
        }
    }
    return [fetchProfile, profile]
}