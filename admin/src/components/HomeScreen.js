import React, { useState } from 'react';
import { Button, CardActions, TextField } from '@material-ui/core'
import craftServerApi from '../api/craftserver'
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
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

const HomeScreen = ({ setIsSignedIn, onRouteChange }) => {
    const classes = useStyles();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignin = async (email, password) => {
        if (!email || !password) {
            alert('Please enter email and password')
        } else {
            try {
                let response = await craftServerApi.post('/signin', { email, password })
                await localStorage.setItem('token', response.data.token);
                setIsSignedIn(true)
                onRouteChange('announcements')
            } catch (err) {
                alert('Wrong Credentials')
            }
        }


    }

    return (

        <Grid className={classes.root} container alignItems="center" justify="center" direction="column" spacing={0}>
            <Grid item >
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.title} variant="h5">Sign In</Typography>
                        <div>
                            <TextField size='small' className={classes.input} variant="outlined" label='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div>
                            <TextField size='small' className={classes.input} variant="outlined" label='password' type='password' value={password} aria-label="minimum height" onChange={(event) => setPassword(event.target.value)} />
                        </div>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button variant='contained' className={classes.button} onClick={() => onSignin(email, password)}>
                            Sign In
                   </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};


export default HomeScreen;