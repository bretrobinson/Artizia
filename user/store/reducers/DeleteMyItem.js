import { DELETE_MYITEM, DELETE_MYITEM_FAILED } from '../actions/DeleteMyItem';


const initialState = {
    myitem: []
};

export const myItemReducer = (state = initialState, action) => {
    switch (action.type) {
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
