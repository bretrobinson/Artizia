import Api from '../../api/craftserver';
export const CREATE_REVIEWITEM = 'CREATE_REVIEWITEM';
export const CREATE_REVIEWITEM_PENDING = 'CREATE_REVIEWITEM_PENDING';
export const CREATE_REVIEWITEM_SUCCESS = 'CREATE_REVIEWITEM_SUCCESS';
export const CREATE_REVIEWITEM_FAILED = 'CREATE_REVIEWITEM_FAILED';

export const createReviewItem = (dispatch,shortDescription,itemReview,itemRating) => {

  dispatch({ type: CREATE_REVIEWITEM_PENDING });
  
    fetch('http://65304143c1d6.ngrok.io/api/newitemreview',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            shortDescription,
            itemReview,
            itemRating
        })
      }
    )
    .then(response => response.json)
    .then(resData => {
      dispatch({ type: CREATE_REVIEWITEM_SUCCESS, payload: resData });
    })
    .catch(err => {
      dispatch({ type: CREATE_REVIEWITEM_FAILED, payload: response });
    });
};

