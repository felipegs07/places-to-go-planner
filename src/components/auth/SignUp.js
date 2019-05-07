import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />
    return (
        <div className="container">
        <form onSubmit={this.handleSubmit} className="white ptg-card">
            <h5 className="grey-text text-darken-3">Cadastrar</h5>
            <div className="input-field">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" onChange={this.handleChange} />
            </div> 
            <div className="input-field">
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="firstName">Primeiro Nome:</label>
                <input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="lastName">Sobrenome:</label>
                <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <button className="btn">Cadastrar</button>
            </div>
        </form>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SignUp);
