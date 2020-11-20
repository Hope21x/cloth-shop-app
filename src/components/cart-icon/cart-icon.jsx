import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleHiddenCart} from '../../redux/cart/cart.reducer';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import {ReactComponent as ShoppingCart} from '../../assets/11.1 shopping-bag.svg';
import {createStructuredSelector} from 'reselect';


const CartIcon = ({toggleHiddenCart, itemCount}) => (
    <div className='cart-icon' onClick={toggleHiddenCart}>
        <ShoppingCart className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart: () => dispatch(toggleHiddenCart())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);