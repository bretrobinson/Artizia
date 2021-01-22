import React, {useState, useEffect} from 'react';
import {Button, Input, TextField, Container} from '@material-ui/core'
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
            <div>
            <Button variant="contained" color="primary"
                    onClick={()=>onUpdateMessage(idAnnouncements, message)}
            >
            Edit Announcement
                </Button> 
                </div>  
            <Input value={detail.title}  onChange={(e)=>onChangeTitle(e.target.value)}    />    
            <TextField label='Old Title' InputLabelProps={{ shrink: true, }} value={detail.title}   />
            <TextField label='New Title' InputLabelProps={{ shrink: true, }} placeholder={detail.title}  onChange={(e)=>onChangeTitle(e.target.value)}  />
            <div>
                <TextField multiline label='Old Message' InputLabelProps={{ shrink: true, }} aria-label="minimum height" rowsMin={3} value={detail.message}   />
                <TextField  multiline label='New Message' InputLabelProps={{ shrink: true, }} aria-label="minimum height" rowsMin={3} placeholder={detail.message} onChange={(e)=>onChangeMessage(e.target.value)}  />
            </div>
            <div>
             <TextField id='date' label='Expiry date' type='date'  InputLabelProps={{ shrink: true, }} onChange={(e)=>onChangeExpiredDate(e.target.value)}   />
            </div>
            <div>


            </div>
           

        </Container>
    );
};

export default AnnouncementEdit;