import Api from '../../api/craftserver';
import * as Notification from 'expo-notifications';
import *as Permissions from 'expo-permissions';
export const CREATE_REVIEWITEM = 'CREATE_REVIEWITEM';
export const CREATE_REVIEWITEM_PENDING = 'CREATE_REVIEWITEM_PENDING';
export const CREATE_REVIEWITEM_SUCCESS = 'CREATE_REVIEWITEM_SUCCESS';
export const CREATE_REVIEWITEM_FAILED = 'CREATE_REVIEWITEM_FAILED';


export const createReviewItem = (shortDescription,itemReview,itemRating) => {
  
  return async dispatch => {
   let tokennotefication
    Permissions.getAsync(Permissions.NOTIFICATIONS)
    .then((statusObj)=>{
      if(statusObj.status !== 'granted'){
        Permissions.askAsync(Permissions.NOTIFICATIONS);
      }
      return statusObj;
    }).then(statusObj=>{
      if(statusObj.status !== 'granted'){
        throw new Error('Permission not granted!');
      }
    }
 
    )
    .then(()=>{
     return Notification.getExpoPushTokenAsync();
    })
    .then(data=>{
       tokennotefication=response.data;
    })
    .catch((err)=>{
      console.log(err)
      return null;
    });
    
   
    console.log('Before fetch');
    
    const response = await  Api.post('/api/newitemreview',
      { 
        shortDescription,
        itemReview,
        itemRating
      }).then(resData => {if (!response.ok) {
        throw new Error('Error create review seller');
      }
       })
    .then(response)
    .then(resData => {
     dispatch({ type:  CREATE_REVIEWITEM_SUCCESS, payload: response});
    })
     .catch(err => {
      dispatch({ type: CREATE_REVIEWITEM_FAILED, payload: response });
     });
    
     Notification.scheduleNotificationAsync({
      content:{
        to:tokennotefication,
        title:'Review',
        body:'Your review was sended!',
        
      },
      
      trigger:{
        seconds:10
      }
    })



  };
};

