import React from 'react';
import {Link} from 'react-router-dom';
import {FaFacebookSquare, FaGoogle, FaLinkedin} from "react-icons/fa";
import './style.css'

const UserLogin = () => {
    return (
        <auth>
            <div className='form'>
                <span className='heading'>Sign in</span>
                <div className='social-login-group'>
                    <button><FaFacebookSquare/></button>
                    <button><FaGoogle/></button>
                    <button><FaLinkedin/></button>
                </div>
                <p>or use your account</p>
                <input placeholder='Email'/>
                <input placeholder='Password'/>
                <Link className='forgot-password' to='/forgot-password'>Forgot your password ?</Link>
                <Link className='btn-primary' to='/'>SIGN IN</Link>
            </div>
            <div className='details'>
                <span className='heading' style={{color: '#fff'}}>Hello, Friend!</span>
                <p>Please enter your details and start journey with us.</p>
                <Link className='btn-outline' to='/sign-up'>SIGN UP</Link>
            </div>
        </auth>
    );
}

export default UserLogin;
