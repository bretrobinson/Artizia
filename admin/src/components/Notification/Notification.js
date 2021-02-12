import { TextareaAutosize, Input, Button, TextField, Container } from '@material-ui/core'
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Notification = () => {

    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [tokenote,setTokennot]=useState("");
   
    
    const TitleInputHandler = (event) => {
        setTitle(event.target.value);
    };
    const MessageInputHandler = (event) => {
        setMessage(event.target.value);
    };
    function sendnotification() {


        axios.get('http://5fa9e9e43a02.ngrok.io/tokennotification'
        ,{
        responseType: 'json',  
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          } 
             }     )
        .then((response) => {
            const result = response.data.map(obj => obj.PushTokenNotification);
           setTokennot(result)
       
        });
       
  
        const PUSH_ENDPOINT = 'https://exp.host/--/api/v2/push/send';
        let data = {
            "to": tokenote,
            "title": title,
            "body": message,
            "sound": "default",
           "priority": 'high',
        }

        fetch(PUSH_ENDPOINT, {
            'mode': 'no-cors',
            'method': 'POST',
            'mode': 'no-cors',
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).catch(err => console.log(err))


    }

    return (
        <div className='div_cont'>


            <div className='div_input_content'>
                <h3>Notification</h3>
                <div>
                     <TextField label='Title' value={title} onChange={TitleInputHandler} />
               </div>
                <div>
                    <TextField label='Notification' value={message} aria-label="minimum height" onChange={MessageInputHandler} />
                </div>

                <div className='div_button_cont'>
                    <Button variant="contained" color="primary" onClick={sendnotification}>
                        Submit notification
                   </Button>

                </div>


            </div>
        </div>
    );
};

export default Notification;