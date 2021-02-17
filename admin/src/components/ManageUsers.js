import { makeStyles, Button, TextField, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import craftserverApi from '../api/craftserver'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const ManageUsers = () => {
    const classes = useStyles();
    const [email,  setEmail] = useState('')
    const [status, setStatus] = useState('')

 const   setStatusHandler = async (email, status)=>{
        console.log(email, status) 
        try {
         let response = await craftserverApi.put('/adminProfile/',{ email,status})
            await alert(response.data)
        }catch (err){
            alert(err)
        }
        
    }
    return (
        <div className='div_cont'>


            <div className='div_input_content'>
                <h3>Manage Users</h3>
                <div>
                     <TextField label='email' placeholder='email' value={email} onChange={(event)=>setEmail(event.target.value)} />
               </div>

                <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          onChange={(event)=>setStatus(event.target.value)}
        >
          <MenuItem value='Active'>Active</MenuItem>
          <MenuItem value='Disable'>Disable</MenuItem>
           </Select>
      </FormControl>
                <div className='div_button_cont'>
                    <Button variant="contained" color="primary"   onClick={()=>setStatusHandler(email, status)}>
                        Submit Changes
                   </Button>

                </div>


            </div>
        </div>
    );
};


export default ManageUsers;