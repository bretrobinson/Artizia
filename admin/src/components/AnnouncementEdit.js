import React, {useState, useEffect} from 'react';
import {TextareaAutosize, Input, Button, TextField, Container} from '@material-ui/core'
import craftserverApi from '../api/craftserver'

const AnnouncementEdit = ({idAnnouncements, onChangeTitle, onChangeExpiredDate, onChangeMessage, onUpdateMessage, title, message, expiredDate}) => {
  
    const [detail, setDetail] = useState('')

    useEffect (()=>{
        const loadMessage = async () =>{
            try{
                const response = await craftserverApi.get('/announcement/'+ idAnnouncements )
                await console.log(response.data)
                setDetail(response.data[0])
                
            } catch (err) {
                console.log(err)
            }
            } 
            loadMessage()
    }, [idAnnouncements])


    return (
        <Container>
            <h3>Edit Message</h3>
            
            <Input value={detail.title}  onChange={(e)=>onChangeTitle(e.target.value)}  />
            <div>
                <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder={detail.message} onChange={(e)=>onChangeMessage(e.target.value)}  />
            </div>
            <div>
             <TextField id='date' label='Expiry date' type='date'  InputLabelProps={{ shrink: true, }} onChange={(e)=>onChangeExpiredDate(e.target.value)}   />
            </div>
            <div>
                <Button variant="contained" color="primary"
                    onClick={()=>onUpdateMessage(idAnnouncements, message)}
            >
            Edit Announcement
                </Button>

            </div>
           

        </Container>
    );
};

export default AnnouncementEdit;