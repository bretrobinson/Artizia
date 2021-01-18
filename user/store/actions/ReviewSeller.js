export const CREATE_REVIEWSELLER = 'CREATE_REVIEWSELLER';

export const createReviewSeller = (sellerReview) => {
  return async dispatch => {
    const date = new Date();
    const response = await fetch(
      'https://localhost:3000/api/newsellerreview',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sellerReview
        })
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const resData = await response.json();

    dispatch({
      type: CREATE_REVIEWSELLER,
      reviewSellerData: {
          name:sellerReview.name,
          sellerRating:sellerReview.sellerRating, 
          sellerReview:sellerReview.sellerReview
       
    }
});
};
};
