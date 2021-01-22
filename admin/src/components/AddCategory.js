import React from 'react';
import {TextareaAutosize, Input, Button, TextField, Container} from '@material-ui/core'

const AddCategory = props => {

  return (
    <div>
      <h1>Add Category</h1>
      <div>
        <TextField id="outlined-basic" label="Category" variant="outlined" />
      </div>
    </div>
  )
}

export default AddCategory;