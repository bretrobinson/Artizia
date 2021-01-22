import React from 'react';
import {TextareaAutosize, Input, Button, TextField, Container} from '@material-ui/core'


const Announcement = ({onChangeTitle, onChangeExpiredDate, onChangeMessage, onSubmitmessage, title, message, expiredDate}) => {
    
    return (
        <Container>
            <h3>General Message</h3>
            
            <Input placeholder='Title'  onChange={(e)=>onChangeTitle(e.target.value)}  />
            <div>
                <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="message" onChange={(e)=>onChangeMessage(e.target.value)}  />
            </div>
            <div>
             <TextField id='date' label='Expiry date' type='date'  InputLabelProps={{ shrink: true, }} onChange={(e)=>onChangeExpiredDate(e.target.value)}  defaultValue={new Date()} />
            </div>
            <div>
                <Button variant="contained" color="primary"
                    onClick={()=>onSubmitmessage({title, message, expiredDate})}
            >
            Submit Announcement
                </Button>

            </div>
           

        </Container>
    );
};

export default Announcement;