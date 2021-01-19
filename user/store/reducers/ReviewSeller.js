import { CREATE_REVIEWSELLER, 
  CREATE_REVIEWSELLER_PENDING, 
  CREATE_REVIEWSELLER_SUCCESS, 
  CREATE_REVIEWSELLER_FAILED } from '../actions/ReviewSeller';
import SellerReview from '../../models/sellerreview';

const initialState = {
  sellerreviews: []
};

export const reviewSellerReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CREATE_REVIEWSELLER:
    //   const newsellerReview = new SellerReview(
    //     action.sellerReview.name,
    //     action.sellerReview.sellerRating,
    //     action.sellerReview.sellerReview,
      
    //   );
    //   return {
    //     ...state,
    //     selerreviews: state.sellerreviews.concat(newsellerReview)
    //   };
    case CREATE_REVIEWSELLER_PENDING:
      return Object.assign({}, state, { isPending: true});
    case CREATE_REVIEWSELLER_SUCCESS:
      const newsellerReview = new SellerReview(
        action.payload.name,
        action.payload.sellerReview,
        action.payload.sellerRating,
       
      
      );      

      return Object.assign({}, state, {sellerreviews: state.sellerreviews.concat(newsellerReview), isPending: false });
    case CREATE_REVIEWSELLER_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending: false});
    default:
      return state;      
  }


};
