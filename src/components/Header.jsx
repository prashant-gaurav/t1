import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';


const Header = () => {
    const [isSticky, setSticky] = React.useState(false);
    const handleScroll = () => {
        if (!isSticky && window.pageYOffset > 50) {
            setSticky(true)
        } else if (isSticky && window.pageYOffset <= 50) {
            setSticky(false)
        }
    };
    window.addEventListener('scroll', handleScroll)


    const headerStyle = classNames({
        'header': true,
        'header-bg': isSticky,
    })

    return (
        <header className={headerStyle}>
            <div className='left'>
                <span className='logo'>Influencer</span>
            </div>
            <div className='right'>
                <Link className='right-link-txt' to='/solution'>Solution</Link>
                <Link className='right-link-txt' to='/services'>Service</Link>
                <Link className='right-link-txt' to='/pricing'>Pricing</Link>
                <Link className='right-link-txt' to='/login'>Login</Link>
                <Link className='right-link-txt' to='/sign-up'><span className='btn-signup'>Sign up</span></Link>
            </div>
        </header>
    );
}

export default Header;
