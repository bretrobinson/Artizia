import { DELETE_MYITEM, DELETE_MYITEM_FAILED } from '../actions/DeleteMyItem';
import SellerReview from '../../models/sellerreview';

const initialState = {
    myitem: []
};

export const myItemReducer = (state = initialState, action) => {
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

        case DELETE_MYITEM:
            return {
                myitem: [
                    ...state.items.filter(items => !action.payload)
                ]
            }
        case DELETE_MYITEM_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;

    }


};
