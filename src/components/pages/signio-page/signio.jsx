import React from 'react';
import './signio.scss';
import SignIn from '../../sign-in/signin.jsx';
import SignUp from '../../sign-up/sign-up';

const SignIO = () =>(
    <div className='signio'>
        <SignIn/>
        <SignUp/>
    </div>
);
export default SignIO;