import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { Button, Container, TextField } from '@material-ui/core';

let catArray = [ 'Crochet', 'Knitting', 'Woodwork', 'Metalwork' ];

const useStyles = makeStyles((theme) => ({
  
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginTop: 5
  },
  inputbox: {
    borderColor: 'red'
  }
}));

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
    setNewItem((prev)=>{
      console.log('item ' + item)
      console.log('prev array: ' + prev)
      return [...prev, item]
    });
    setItem("");
  }

  return (
    <Container>
      <h2><u>Current Categories</u></h2>
      <div className={classes.root}>
        <List component="nav">
          {newItem.map((item) => (
            <ListItem>
             {item}
            </ListItem>
          ))}
          <Divider />
        </List>
      </div>
      <div className={classes.inputbox}>
        <TextField id="newCategory"
                  label="Category"
                  value={item}
                  variant="outlined"
                  placeholder="New Category"
                  onChange={firstEvent}
        />
      </div>
      <div className={classes.button}>
        <Button className="AddBtn"
                onClick={secondEvent}
                variant="contained"
                color="primary"
        >
          Add Category
        </Button>
      </div>
    </Container>
  );
}

export default AddCategory;