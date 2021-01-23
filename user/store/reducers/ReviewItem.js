import {DELETE_MYITEM } from '../actions/DeleteMyItem';
  import ItemReview from '../../models/itemreview';
  
  const initialState = {
    itemreviews: []
  };
  
  export const reviewItemReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case DELETE_MYITEM:
        return{
           items:[
             ...state.items.filter(items=>items !==action.payload)
           ]
          };
        default:
        return state;      
    }
    
  };
  