import React from 'react';
import {TextareaAutosize, Input, Button, TextField, Container} from '@material-ui/core'



const Announcement = ({onChangeTitle, onChangeExpiredDate, onChangeMessage, onSubmitmessage, title, message, expiredDate, onRoute}) => {

    const submitMessageHandler = ({title, message, expiredDate})=>{
        if (!title|| !message ){
            alert('Please enter Title , Message and Expired Date')
            onRoute('createMessage')
          } else {
        onSubmitmessage({title, message, expiredDate})
        onRoute('announcements')
    }
}
    return (
        <Container maxWidth='sm'>
            <h3>General Message</h3>
            
            <Input placeholder='Title' required onChange={(e)=>onChangeTitle(e.target.value)}  />
            <div>
                <TextareaAutosize required  aria-label="minimum height" rowsMin={3} placeholder="message" onChange={(e)=>onChangeMessage(e.target.value)}  />
            </div>
            <div>
             <TextField id='date' label='Expiry date' type='date'  InputLabelProps={{ shrink: true, }} onChange={(e)=>onChangeExpiredDate(e.target.value)}  defaultValue={new Date()} />
            </div>
            <div>              
               <Button variant="contained" color="primary"  onClick={()=>submitMessageHandler({title, message, expiredDate})}>
                    Submit Announcement
                </Button>
               

            </div>
           

        </Container>
    );
};

export default Announcement;