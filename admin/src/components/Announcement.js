import React, {useEffect, useState } from 'react';
import {TextareaAutosize, Input, Button, TextField} from '@material-ui/core'
import craftserverApi from '../api/craftserver'

const Announcement = () => {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [expiredDate, setExpiredDate] = useState(new Date())

useEffect (()=>{
loadAnnouncement()
}, [])

const onSubmitmessage = async ({title, message, expiredDate})=>{
    try{
        const response = await craftserverApi.post('/announcement', {title, message, expiredDate})
        await console.log(response.data)
    } catch (err) {
        console.log(err)
    }
}

const loadAnnouncement = async () =>{
    try{
        const response = await craftserverApi.get('/announcement')
        await console.log(response.data)
    } catch (err) {
        console.log(err)
    }
}



    return (
        <div>
            <h3>General Message</h3>
            
            <Input placeholder='Title'  onChange={(e)=>setTitle(e.target.value)}  />
            <div>
                <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="message" onChange={(e)=>setMessage(e.target.value)}  />
            </div>
            <div>
             <TextField id='date' label='Expiry date' type='date'  InputLabelProps={{ shrink: true, }} onChange={(e)=>setExpiredDate(e.target.value)}  defaultValue={new Date()} />
            </div>
            <div>
                <Button variant="contained" color="primary"
                    onClick={()=>onSubmitmessage({title, message, expiredDate})}
            >
            Submit Announcement
                </Button>

            </div>

        </div>
    );
};

export default Announcement;