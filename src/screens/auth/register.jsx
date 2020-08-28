import React from 'react';
import {Link} from 'react-router-dom';
import {FaFacebookSquare, FaGoogle, FaLinkedin} from "react-icons/fa";
import './style.css'

const UserRegister = () => {
    return (
        <auth>
            <div className='details'>
                <span className='heading' style={{color: '#fff'}}>Welcome!</span>
                <p>Already have account? </p>
                <Link className='btn-outline' to='/login'>SIGN IN</Link>
            </div>
            <div className='form'>
                <span className='heading'>Sign up</span>
                <div className='social-login-group'>
                    <button><FaFacebookSquare/></button>
                    <button><FaGoogle/></button>
                    <button><FaLinkedin/></button>
                </div>
                <p>or provide details</p>
                <input placeholder='Name'/>
                <input placeholder='Email'/>
                <input placeholder='Mobile'/>
                <input placeholder='Password'/>
                <Link className='btn-primary' to='/'>SIGN UP</Link>
            </div>

        </auth>
    );
}

export default UserRegister;
