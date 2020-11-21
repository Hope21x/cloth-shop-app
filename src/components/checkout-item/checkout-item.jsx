import React from 'react';
import './checkout-item.scss';
import {connect} from 'react-redux';
import {addItem, clearItem, removeItem} from '../../redux/cart/cart.reducer';

const CheckoutItem = ({cartItem, dispatch}) => {
    const {name,imageUrl,price,quantity} = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=> dispatch(removeItem(cartItem))}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => 
            dispatch(clearItem(cartItem))
            }>
            &#10005;
        </div>
        
    </div>
)};
export default connect(null)(CheckoutItem); 