import React from 'react';
import { NavLink } from 'react-router-dom';


const LogoffLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/" className="black-text">Log In</NavLink></li>
            <li><NavLink to="/" className="black-text">Cadastrar</NavLink></li>
        </ul>
    )
}

export default LogoffLinks;