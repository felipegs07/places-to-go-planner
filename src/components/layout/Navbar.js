import React from 'react';
import { Link } from 'react-router-dom';
import LoginLinks from './loginLinks';
import LogoffLinks from './logoffLinks';
import { connect } from 'react-redux';


const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <LoginLinks profile={profile} /> : <LogoffLinks />
    return (
        <nav className="nav-wrapper white">
            <div className="container">
                <Link to="/" className="brand-logo black-text">Places to Go</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);