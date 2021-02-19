import React from 'react';
import { Button, Container, makeStyles,} from '@material-ui/core'


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

const AnnouncementDisplay = ({annnouncementData,onDeleteMessage,onRouteChange}) => {
       const classes= useStyles()

    const annoucementDisplay = annnouncementData.map((data)=>{
        return (<Container className={classes.container }  key={data.idAnnouncements}>

            <div className={classes.title} >
              <div style={{fontWeight:'bold', fontSize: 20, marginRight: 'auto'}}>  {data.title} </div>
            <Button style={{marginRight:150}}variant="contained" onClick={()=>onRouteChange(`edit`,{param:data.idAnnouncements})}>edit</Button>
            <Button variant="contained" color="secondary" onClick={()=>onDeleteMessage(data.idAnnouncements)}>delete</Button>
            </div>
            <div>{data.message}</div>
            <div className= {classes.date}>
                <label>Date Entered</label>
                <div className={classes.dateInside}>{data.dateEntered.substring(0,10)}</div> 
            </div>
            <div className= {classes.date}>
                <label>Expiry Date</label>
                <div className={classes.dateInside}>   {data.expiredDate.substring(0,10)}</div>
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