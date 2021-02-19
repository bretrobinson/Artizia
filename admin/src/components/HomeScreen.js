import React, { useState } from 'react';
import {  Button, TextField } from '@material-ui/core'
import craftServerApi from '../api/craftserver'

const HomeScreen = ({ setIsSignedIn, onRouteChange}) => {

    const [email, setEmail] = useState('')
    const[password, setPassword] = useState('')  
    
    const onSignin = async (email, password)=>{
        if(!email || !password){
            alert('Please enter email and password')
        } else{
            try {
                let response = await craftServerApi.post('/signin', {email, password})
                await localStorage.setItem('token', response.data.token);  
                setIsSignedIn(true)
                onRouteChange('announcements')
            }catch (err){
                alert('Wrong Credentials')
            }
        }


    }
    return (
        <div className='div_cont'>


            <div className='div_input_content'>
                <h3>Sign in</h3>
                <div>
                     <TextField label='email' value={email} onChange={(event)=>setEmail(event.target.value)} />
               </div>
                <div>
                    <TextField label='password' type='password' value={password} aria-label="minimum height" onChange={(event)=>setPassword(event.target.value)} />
                </div>

                <div className='div_button_cont'>
                    <Button variant="contained" color="primary"  onClick={()=>onSignin(email, password)}>
                        Signin
                   </Button>

                </div>


            </div>
        </div>
    );
};


export default HomeScreen;