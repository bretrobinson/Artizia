export const SET_ITEM = 'SET_ITEM';
export const SET_ITEM_FAILED = 'SET_ITEM_FAILED';
import Api from '../../api/craftserver';


export const fetchitem = (dispatch,userid) => {
  dispatch({ type: SET_ITEM });
  
  Api.get(`/api/myitem/${userid}`)
    .then(res => {
         dispatch({ type: SET_ITEM,  payload: res.data})
  })
  .catch(err => {
      console.log(err);
      dispatch({ type: SET_ITEM_FAILED, payload: err})
  }); 
};