import axios from 'axios';
import Api from '../../api/craftserver';
export const DELETE_MYITEM= 'DELETE_MYITEM';
export const DELETE_MYITEM_FAILED = 'DELETE_MYITEM_FAILED';



export const DeleteMyItem = (userid,itemid) => {

return async dispatch => {
    
    const response = await Api.post(`/api/deletemyitem/${itemid}/${userid}`,
      {
        itemid,
        userid,
             
      }).then(resData => {if (!response.ok) {
        throw new Error('Error removing item');
      }
       })
   .then(response)
   .then(resData => {
     dispatch({ type: DELETE_MYITEM, payload: resData});
    })
    .catch(err => {
     dispatch({ type: DELETE_MYITEM_FAILED, payload: response });
    });
    
  };
};

