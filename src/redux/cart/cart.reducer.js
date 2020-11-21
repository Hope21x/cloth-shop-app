import {addItemToCart, removeCartItem} from './cart.utils';
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
        case cartActionTypes.CLEAR_CART_ITEMS: 
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            }
        default: 
            return state;


    }
 
}


//ACTION TYPES
const cartActionTypes = {
    TOGGLE_HIDDEN_CART: 'TOGGLE_HIDDEN_CART',
    ADD_ITEM: 'ADD_ITEM',
    CLEAR_CART_ITEMS: 'CLEAR_CART_ITEMS',
    REMOVE_ITEM: 'REMOVE_ITEM' 
} 
//ACTIONS
export const toggleHiddenCart = () => ({
    type: cartActionTypes.TOGGLE_HIDDEN_CART
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItem = item => ({
    type: cartActionTypes.CLEAR_CART_ITEMS,
    payload: item
});

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
});


//------------------------------------------------------



export default cartReducer;

