import React from 'react';
import { NavLink } from 'react-router-dom';


const LoginLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/" className="black-text">Novo Lugar</NavLink></li>
            <li><NavLink to="/" className="black-text">Sair</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating green darken-4">GS</NavLink></li>
        </ul>
    )
}

export default LoginLinks;