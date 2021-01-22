import axios from 'axios';
import Api from '../../api/craftserver';
export const DELETE_MYITEM= 'DELETE_MYITEM';
export const DELETE_MYITEM_FAILED = 'DELETE_MYITEM_FAILED';

export const DeleteMyItem = (userid,itemid) => {
  console.log('In Delete action');
  console.log("action_userid>>>>" + userid);
  console.log("action_itemid>>>" + itemid);



  
  return async dispatch => {

    console.log('Before fetch');
    
    const response = await axios.post('http://5dc34b5df270.ngrok.io/api/deletemyitem/:userid/:itemid',
      {
        userid,
        itemid,
             
      }).then(resData => {if (!response.ok) {
        throw new Error('Error removing item');
      }
       })
   // const resData = await response; 
     .then(response)
    .then(resData => {
     dispatch({ type: DELETE_MYITEM, payload: resData});
    })
    .catch(err => {
     dispatch({ type: DELETE_MYITEM_FAILED, payload: response });
    });
    
  };
};

