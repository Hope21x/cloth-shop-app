
export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    
    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
             ? {...cartItem, quantity: cartItem.quantity + 1}
             : cartItem
            )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]

}

//...cartItemToAdd basically spreads in all the objects or items or properties belonging to cartItemToAdd



//------------------------------------------------------------------------------------------------------------------
export const removeCartItem = (cartItems, cartItemToRemove) => {
    const existiingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existiingCartItem.quantity === 1){
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }


    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity -1} : cartItem
    )

}
