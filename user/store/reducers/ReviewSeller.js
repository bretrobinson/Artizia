import { CREATE_REVIEWSELLER } from '../actions/orders';
import SellerReview from '../../models/sellerreview';

const initialState = {
  selerreviews: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REVIEWSELLER:
      const newsellerReview = new SellerReview(
        action.sellerReview.name,
        action.sellerReview.sellerRating,
        action.sellerReview.sellerReview,
      
      );
      return {
        ...state,
        selerreviews: state.state.concat(newOrder)
      };
  }

  return state;
};
