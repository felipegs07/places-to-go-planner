import React from 'react';
import { NavLink } from 'react-router-dom';


const LogoffLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/signin" className="black-text">Entrar</NavLink></li>
            <li><NavLink to="/signup" className="black-text">Cadastrar</NavLink></li>
        </ul>
    )
}

export default LogoffLinks;