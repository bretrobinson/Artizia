import {Typography, Link, makeStyles, Button, Container} from '@material-ui/core'
import React from 'react';

const useStles= makeStyles({
    navbar: {
        paddingRight:20,
        
    }
})

const Navbar = ({isSignedIn}) => {
    const classes = useStles()
    console.log(isSignedIn)

  // if(!isSignedIn){
  //   return null
  // }
        return (
            
            <Container style={{marginTop: 20}}>
    <Typography >
    
          
          <Link className={classes.navbar}  href="/message"><Button variant="outlined" color="primary">Create Message</Button></Link>
          <Link className={classes.navbar} href="/rules"><Button variant="outlined" color="primary">Rules</Button></Link>
          <Link className={classes.navbar}  href="/addCategory"><Button variant="outlined" color="primary">Add Category</Button></Link>
          <Link className={classes.navbar}  href="/Notification"><Button variant="outlined" color="primary">Send Notification</Button></Link>
          <Link className={classes.navbar}  href="/manageusers"><Button variant="outlined" color="primary">Manage Users</Button></Link>
          <Link className={classes.navbar}  href="/announcements"><Button variant="outlined" color="primary">announcements</Button></Link>
          <Link className={classes.navbar} href="/" ><Button variant="outlined" color="primary">Signout</Button></Link>
     
        </Typography>
        </Container>
        );
    

};

export default Navbar;
