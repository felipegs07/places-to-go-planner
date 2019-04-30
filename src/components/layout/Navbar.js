import React from 'react';
import { Link } from 'react-router-dom';
import LoginLinks from './loginLinks';
import LogoffLinks from './logoffLinks';


const Navbar = () => {
    return (
        <nav className="nav-wrapper white">
            <div className="container">
                <Link to="/" className="brand-logo black-text">Places to Go</Link>
                <LoginLinks />
                <LogoffLinks />
            </div>
        </nav>
    )
}

export default Navbar;