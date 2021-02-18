import React, { useState } from 'react';
import { TextareaAutosize, Input, Button, TextField, Container } from '@material-ui/core'
import {    useHistory  } from "react-router-dom";

const HomeScreen = ({isSignedIn, setIsSignedIn, onRouteChange}) => {

    const [email, setEmail] = useState('')
    const[password, setPassword] = useState('')  
    const history = useHistory()
 
    const onSignin =()=>{
        setIsSignedIn(true)
        onRouteChange('announcements')
    }
    return (
        <div className='div_cont'>


            <div className='div_input_content'>
                <h3>Sign in</h3>
                <div>
                     <TextField label='email' value={email} onChange={(event)=>setEmail(event.target.value)} />
               </div>
                <div>
                    <TextField label='passowrd' value={password} aria-label="minimum height" onChange={(event)=>setPassword(event.target.value)} />
                </div>

                <div className='div_button_cont'>
                    <Button variant="contained" color="primary"  onClick={()=>onSignin()}>
                        Signin
                   </Button>

                </div>


            </div>
        </div>
    );
};


export default HomeScreen;