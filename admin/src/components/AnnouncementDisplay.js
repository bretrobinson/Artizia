import React from 'react';
import { Button, Container} from '@material-ui/core'
import {    useHistory  } from "react-router-dom";

const AnnouncementDisplay = ({annnouncementData,onUpdateMessage,onDeleteMessage, message}) => {
    const history = useHistory()

    const annoucementDisplay = annnouncementData.map((data)=>{
        return (<Container>

            <div key={data.idAnnouncements} >{data.title}
            <Button onClick={()=>onDeleteMessage(data.idAnnouncements)}>delete</Button>
            </div>
            <div>{data.message}</div>
            Date Entered<div>{data.dateEntered}</div>
            Expire Date <div>{data.expiredDate}</div>            
            <Button onClick={()=>history.push('/edit/' + data.idAnnouncements)}>edit</Button>
            
            </Container>)
        })
        

    return (
        <Container maxWidth='lg'>
             {annoucementDisplay}
        </Container>
    );
};

export default AnnouncementDisplay;