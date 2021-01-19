import React, { useState } from 'react';
import {TextareaAutosize, Input, Button} from '@material-ui/core'
import craftserverApi from '../api/craftserver'

const Announcement = () => {

    const [announcement, setAnnouncement] = useState({})
const onChangeAnnouncement =(e)=>{
    setAnnouncement(e.target.value)
}

const onSubmitAnnouncement = async ({announcement})=>{
    try{
        const response = await craftserverApi.post('/announcement', {announcement})
        await console.log(response.data)
    } catch (err) {
        console.log(err)
    }
}
    return (
        <div>
            <h3>General Announcement</h3>
            <div>
                <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" onChange={onChangeAnnouncement} />
            </div>
            <div>
                <Button variant="contained" color="primary"
                    onClick={()=>onSubmitAnnouncement({announcement})}
            >
            Submit Announcement
                </Button>
            </div>

        </div>
    );
};

export default Announcement;