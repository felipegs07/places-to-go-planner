import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const LoginLinks = (props) => {
    return (
        <ul className="right">
            <li><span className="black-text simple-a" onClick={props.signOut}>Sair</span></li>
            <li><NavLink to="/" className="btn btn-floating green darken-4">GS</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(LoginLinks);