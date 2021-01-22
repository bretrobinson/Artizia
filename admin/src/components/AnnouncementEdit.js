import React, {useState, useEffect} from 'react';
import {Button, TextField, Container} from '@material-ui/core'
import {Link} from '@material-ui/core'
import craftserverApi from '../api/craftserver'

const AnnouncementEdit = ({idAnnouncements, onChangeTitle, onChangeExpiredDate, onChangeMessage, onUpdateMessage, title, message, expiredDate}) => {
  
    const [detail, setDetail] = useState('')

    useEffect (()=>{
        const loadMessage = async () =>{
            try{
                const response = await craftserverApi.get('/announcement/'+ idAnnouncements )
                setDetail(response.data[0])
                
            } catch (err) {
                console.log(err)
            }
            } 
            loadMessage()
    }, [idAnnouncements])


    return (
        <Container maxWidth='sm' >
            <h3>Edit Message</h3>
            <div>
           <Link href='/' onClick={()=>onUpdateMessage(idAnnouncements, message)}> <Button variant="contained" color="primary"
                    
            >
            Edit Announcement
                </Button> </Link>
                <Link href='/' > <Button variant="contained" color="primary">Cancel </Button> </Link>
                </div>  
            
            <TextField label='Old Title' InputLabelProps={{ shrink: true, }} value={detail.title}   />
            <TextField label='New Title' InputLabelProps={{ shrink: true, }} value={detail.title}  onChange={(e)=>onChangeTitle(e.target.value)}  />
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