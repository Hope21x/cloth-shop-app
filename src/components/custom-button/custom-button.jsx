import React from 'react';
import './custom-button.scss';

const CustomButtom = ({children,isGoogleSignIn, inverted, click_animate,...otherProps}) => (
    <button className={ `${click_animate ? 'click_animate': ''}${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}

    </button>
);
export default CustomButtom;