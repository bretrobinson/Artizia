import Items from '../../models/item';
import { SET_ITEM } from '../actions/DisplayMyItem';

const initialState = {
  items: []
};

export const userItemsReducer =(state = initialState, action) => {
 //console.log(action.type)
  switch (action.type) {
    case SET_ITEM:
      console.log(action.payload) 
      return Object.assign({}, state, {items: action.myitem });
 
   
  }


  return state;
};
