import React, {useEffect, useState } from 'react';
import {TextareaAutosize, Input, Button, TextField} from '@material-ui/core'
import craftserverApi from '../api/craftserver'

const Announcement = () => {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [expiredDate, setExpiredDate] = useState(new Date())
    const [annnouncementData, setAnnouncementData] = useState([])

useEffect (()=>{
loadAnnouncement()
}, [])

const onSubmitmessage = async ({title, message, expiredDate})=>{
    if (!title|| !message ){
        alert('Please enter Title , Message and Expired Date')
    }else {
        try{
            const response = await craftserverApi.post('/announcement', {title, message, expiredDate})
            await console.log(response.data)
            await loadAnnouncement()
            // await setMessage('')
     
        } catch (err) {
            console.log(err)
        }
    }
    
    setTitle('')
    setExpiredDate(new Date())
}

const loadAnnouncement = async () =>{
    try{
        const response = await craftserverApi.get('/announcement')
        await console.log(response.data)
        setAnnouncementData(response.data)
    } catch (err) {
        console.log(err)
    }
}
const onUpdateMessage = async (idMessage, message) =>{
    console.log(message)
    const response =  await craftserverApi.post('/announcement/' + idMessage ,{message})
    loadAnnouncement()
}


const onDeleteMessage = async (idMessage) =>{
    const response =  await craftserverApi.delete('/announcement/' + idMessage)
    loadAnnouncement()
}

const annoucementDisplay = annnouncementData.map((data)=>{
    return (<div>
        <div key={data.idAnnouncements} >{data.title} </div>
        <div>{data.message}</div>
        <Button onClick={()=>onUpdateMessage(data.idAnnouncements, message)}>edit</Button>
        <Button onClick={()=>onDeleteMessage(data.idAnnouncements)}>delete</Button>
        </div>)
})


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
            {annoucementDisplay}

        </div>
    );
};

export default Announcement;