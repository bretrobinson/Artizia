import React, {useState, useEffect} from 'react';
import {Button, TextField, Container} from '@material-ui/core'
import {Link} from '@material-ui/core'
import craftserverApi from '../api/craftserver'

const AnnouncementEdit = ({idAnnouncements, onChangeTitle, setIsignedIn, onChangeMessage, onUpdateMessage, title, message, expiredDate}) => {
  
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

//    const  onHandleInputChange = (e)=>{
//        const {name, value} = e.target
//        onChangeTitle(cur=>{
//            return {...cur, [name]: value}
//        })
//    }
const onSubmitEdit =(idAnnouncements, message)=>{
    onUpdateMessage(idAnnouncements, message)
    setIsignedIn(true)
}

    return (
        <Container maxWidth='sm' >
            <h3>Edit Announcement</h3>
            <div>
           <Button variant="contained" color="primary"  href='/announcements' onClick={()=>onSubmitEdit(idAnnouncements, message)} >
            Submit Edit
                </Button> 
                <Link href='/' > <Button variant="contained" color="primary">Cancel </Button> </Link>
                </div>  
            
                <TextField label='Title' InputLabelProps={{ shrink: true, }} value={detail.title}  onChange={(e)=>onChangeTitle(e.target.value)}  />
            <div>
                <TextField  multiline label='New Message' InputLabelProps={{ shrink: true, }} aria-label="minimum height" rowsMin={3} defaultValue={detail.message} onChange={(e)=>onChangeMessage(e.target.value)}  />
            </div>

            <div>


            </div>
           

        </Container>
    );
};

export default AnnouncementEdit;