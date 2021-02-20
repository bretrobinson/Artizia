import {Typography, Link, makeStyles, Button, Container} from '@material-ui/core'
import React from 'react';

const useStles= makeStyles({
    navbar: {
        paddingRight:20,
        
    }
})

const Navbar = ({isSignedIn, onRoute}) => {
    const classes = useStles()
   const signout = ()=>{
     localStorage.removeItem('token')
     onRoute('signout')
   }

  if(!isSignedIn){
    return null
  }
        return (
            
            <Container style={{marginTop: 20}}>
    <Typography >
    
          
          <Link className={classes.navbar}  onClick = {()=>onRoute('createMessage')} ><Button variant="outlined" color="primary">Create Message</Button></Link>
          <Link className={classes.navbar} onClick = {()=>onRoute('rules')}><Button variant="outlined" color="primary">Rules</Button></Link>
          <Link className={classes.navbar}  onClick = {()=>onRoute('addCategory')} ><Button variant="outlined" color="primary">Add Category</Button></Link>
          <Link className={classes.navbar} onClick={()=>onRoute('notification')} ><Button variant="outlined" color="primary">Send Notification</Button></Link>
          <Link className={classes.navbar}   onClick={()=>onRoute('manageUsers')}><Button variant="outlined" color="primary">Manage Users</Button></Link>
          <Link className={classes.navbar} onClick={()=>onRoute('announcements')}  ><Button variant="outlined" color="primary">announcements</Button></Link>
          <Link className={classes.navbar} onClick={()=>signout()}><Button variant="outlined" color="primary">Signout</Button></Link>
     
        </Typography>
        </Container>
        );
    

};

export default Navbar;
