import Api from '../../api/craftserver';
export const CREATE_REVIEWITEM = 'CREATE_REVIEWITEM';
export const CREATE_REVIEWITEM_PENDING = 'CREATE_REVIEWITEM_PENDING';
export const CREATE_REVIEWITEM_SUCCESS = 'CREATE_REVIEWITEM_SUCCESS';
export const CREATE_REVIEWITEM_FAILED = 'CREATE_REVIEWITEM_FAILED';

export const createReviewItem = (dispatch,shortDescription,itemReview,itemRating) => {
  console.log('In createReviewSeller action');
  console.log("action_name>>>>" + name);
  console.log("action_review>>>" + sellerReview);
  console.log("action_rating>>>" + sellerRating);
  // dispatch({ type: CREATE_REVIEWSELLER_PENDING });


  
  return async dispatch => {

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
     dispatch({ type:  CREATE_REVIEWITEM_SUCCESS, payload: resData});
    })
     .catch(err => {
      dispatch({ type: CREATE_REVIEWITEM_FAILED, payload: response });
     });


  };
};

