import Api from '../../api/craftserver';
import * as Notification from 'expo-notifications';
import *as Permissions from 'expo-permissions';
export const CREATE_REVIEWITEM = 'CREATE_REVIEWITEM';
export const CREATE_REVIEWITEM_PENDING = 'CREATE_REVIEWITEM_PENDING';
export const CREATE_REVIEWITEM_SUCCESS = 'CREATE_REVIEWITEM_SUCCESS';
export const CREATE_REVIEWITEM_FAILED = 'CREATE_REVIEWITEM_FAILED';


export const createReviewItem = (shortDescription,itemReview,itemRating) => {
  
  return async dispatch => {
     
    let pushToken;
    // dispatch({ type: CREATE_REVIEWSELLER_PENDING });
   let statusObj=await Permissions.getAsync(Permissions.NOTIFICATIONS);
  
    Notification.getExpoPushTokenAsync();
 
   
     
      statusObj= await Permissions.askAsync(Permissions.NOTIFICATIONS);
     
    
    if(statusObj.status !=='granted'){
      pushToken=null; 
    }else{
      pushToken= (await Notification.getExpoPushTokenAsync()).data;

    }
    console.log('Before fetch');
    
    const response = await  Api.post('/api/newitemreview',
      { 
        shortDescription,
        itemReview,
        itemRating,
        ownerPushToken:pushToken
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
    
      fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip, deflate',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to:pushToken,
          title: 'Review was placed!',
          body:itemReview,
          
        })
      });
    



  };
};

