import React from 'react';
import { Button, Container, makeStyles,} from '@material-ui/core'
import {    useHistory  } from "react-router-dom";


const useStyles = makeStyles({
    container: {
        background: 'lightBlue',    
        borderRadius: 10  ,
        margin: 10,
        paddingBottom: 10,
        paddingTop: 10
    },
    
    title: {
        display: 'flex',
        marginBottom:10,
        marginTop: 20,
        
    },
    date: {
        display: 'flex',
        marginTop: 15,
        marginBottom: 5
    },
    dateInside: {
        paddingLeft: 50
    }
})

const AnnouncementDisplay = ({annnouncementData,onDeleteMessage}) => {
    const history = useHistory()
    const classes= useStyles()

    const annoucementDisplay = annnouncementData.map((data)=>{
        return (<Container className={classes.container}>

            <div className={classes.title} key={data.idAnnouncements} >
              <div style={{fontWeight:'bold', fontSize: 20, marginRight: 'auto'}}>  {data.title} </div>
            <Button style={{marginRight:150}}variant="contained" onClick={()=>history.push('/edit/' + data.idAnnouncements)}>edit</Button>
            <Button variant="contained" color="secondary" onClick={()=>onDeleteMessage(data.idAnnouncements)}>delete</Button>
            </div>
            <div>{data.message}</div>
            <div className= {classes.date}>
                <label>Date Entered</label>
                <div className={classes.dateInside}>{data.dateEntered}</div> 
            </div>
            <div className= {classes.date}>
                <label>Expiry Date</label>
                <div className={classes.dateInside}>{data.expiredDate}</div>
            </div>            
            
            
            </Container>)
        })
        

    return (
        <Container maxWidth='lg'>
            <h1>Announcements</h1>
             {annoucementDisplay}
        </Container>
    );
};

export default AnnouncementDisplay;