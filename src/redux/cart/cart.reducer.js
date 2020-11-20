import {addItemToCart} from './cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};



const cartReducer = (state= INITIAL_STATE,action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_HIDDEN_CART:
            return{
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default: 
            return state;


    }
 
}


//ACTION TYPES
const cartActionTypes = {
    TOGGLE_HIDDEN_CART: 'TOGGLE_HIDDEN_CART',
    ADD_ITEM: 'ADD_ITEM'
}
//ACTIONS
export const toggleHiddenCart = () => ({
    type: cartActionTypes.TOGGLE_HIDDEN_CART
})

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})


//------------------------------------------------------



export default cartReducer;

