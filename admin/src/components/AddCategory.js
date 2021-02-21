import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { Button, Container, TextField } from '@material-ui/core';
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

let catArray = ['Crochet', 'Knitting', 'Woodwork', 'Metalwork'];

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function AddCategory() {
  const classes = useStyles();

  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState(['Crochet', 'Knitting', 'Woodwork', 'Metalwork']);

  const firstEvent = (event) => {
    console.log('firstevent ' + event.target.value)
    setItem(event.target.value);
  }

  const secondEvent = () => {
    console.log('second event ' + item)
    setNewItem((prev) => {
      console.log('item ' + item)
      console.log('prev array: ' + prev)
      return [...prev, item]
    });
    setItem("");
  }

  return (
    <Grid className={classes.root} container alignItems="center" justify="center" direction="column" spacing={0}>
      <Grid item >
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title} variant="h5">Add Category</Typography>
            <Typography className={classes.heading} variant="h6">Current Categories:</Typography>
            {/* <div className={classes.root}> */}
              <List component="nav">
                {newItem.map((item) => (
                  <ListItem>
                    {item}
                  </ListItem>
                ))}
                <Divider />
              </List>
            {/* </div> */}

            <div>
              <TextField id="newCategory"
                className={classes.input}
                label="Category"
                value={item}
                variant="outlined"
                placeholder="New Category"
                onChange={firstEvent}
              />
            </div>
          </CardContent>
          <CardActions className={classes.cardActions}>

            <Button className="AddBtn"
              onClick={secondEvent}
              variant="contained"
              color="primary"
            >
              Add Category
        </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AddCategory;