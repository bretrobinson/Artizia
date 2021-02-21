import {  Button, TextField } from '@material-ui/core'
import React, { useState,useEffect} from 'react';
import Api from '../../api/craftserver';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: "100%",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.main
    },
    title: {
        color: theme.palette.title.main,
        textAlign: 'center',
        marginBottom: 20
    },
    heading: {
        color: theme.palette.heading.main
    },
    card: {
        backgroundColor: theme.palette.cardBackground.main,
        marginBottom: '30%',
        boxShadow: '5px 10px ' + theme.palette.boxShadow.main
        // #888888'

        // transition: "0.3s",
        // boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        // "&:hover": {
        //   boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        // }        
    },
    cardContent: {
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 40
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 80,
        paddingBottom: 40
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.buttonText.main,
        textTransform: 'none',
        fontSize: 16
    },
    input: {
        marginBottom: 15,
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.inputContainer.main
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.inputContainerHover.main
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.inputContainerFocused.main
        },
        backgroundColor: 'white'
    },
    // inputLabel: {
    //     color: theme.palette.inputLabel.main,
    //     '&.Mui-focused': {
    //         color: theme.palette.inputLabel.main
    //       }        
    // }

}))

const Notification = () => {
    const classes = useStyles();

    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [tokenote, setTokennot] = useState("");


    const TitleInputHandler = (event) => {
        setTitle(event.target.value);
    };
    const MessageInputHandler = (event) => {
        setMessage(event.target.value);
    };
    function sendnotification() {


    
  
        const PUSH_ENDPOINT = 'https://exp.host/--/api/v2/push/send';
        let data = {
            "to": tokenote,
            "title": title,
            "body": message,
            "sound": "default",
            "priority": 'high',
        }

        fetch(PUSH_ENDPOINT, {
            'mode': 'no-cors',
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).catch(err => console.log(err))


    }
    useEffect(() => {

        Api.get('/api/tokennotification'
        ,{
        responseType: 'json',  
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          } 
             }     )
        .then((response) => {
            const result = response.data.map(obj => obj.PushTokenNotification);
           setTokennot(result)
       
        });
       
      }, []);
    return (
        <Grid className={classes.root} container alignItems="center" justify="center" direction="column" spacing={0}>
            <Grid item >
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.title} variant="h5">Notification</Typography>

                        <div>
                            <TextField size='small' className={classes.input} variant="outlined" label='Title' value={title} onChange={TitleInputHandler} />
                        </div>
                        <div>
                            <TextField size='small' className={classes.input} variant="outlined" label='Notification' value={message} aria-label="minimum height" onChange={MessageInputHandler} />
                        </div>
                    </CardContent>
                    <CardActions className={classes.cardActions}>

                        {/* <div className='div_button_cont'> */}
                        <Button variant='contained' className={classes.button} onClick={sendnotification}>
                            Submit notification
                   </Button>

                        {/* </div> */}
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Notification;