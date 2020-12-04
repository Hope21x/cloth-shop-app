import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectHidden} from '../../redux/cart/cart.selector';
import CartDropdown from '../cart-dropdown/cart-dropdown';


 const Header = ({currentUser, hidden}) => (
    <div className='header'>
        
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>

        </Link>
        
        <div className='options'>
            <Link className='option5' to='/' >HOME</Link>
            <Link className='option1' to='/shop'>
                SHOP
            </Link>
            <Link className='option2' to='null'>
                CONTACT US
            </Link>
            {
                currentUser ?
                <div className='option3' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link to='/signin' className='option4'>SIGN IN</Link>


            }
            <CartIcon/>
            



        </div> 
        {
            hidden ? null : <CartDropdown/>
        }
        
       


    </div>
);
//we first created the reducer/userReducer and passed it to the rootReducer and then passed to store.
//then we use the connect (HOC) to mapStateToProps we want  

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
    
})
export default connect(mapStateToProps)(Header);