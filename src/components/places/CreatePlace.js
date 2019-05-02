import React, { Component } from 'react'

class CreatePlace extends Component {
    state = {
        place: '',
        adress: '',
        date: '',
        tourId: this.props.tourId
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
        return (
            <form onSubmit={this.handleSubmit} className="white ptg-card ptg-card--xsm">
                <h5 className="grey-text text-darken-3">Criar Lugar Para Ir</h5>
                <div className="input-field">
                    <label htmlFor="place">Lugar:</label>
                    <input type="text" id="place" onChange={this.handleChange} />
                </div> 
                <div className="input-field">
                    <label htmlFor="adress">Endereço:</label>
                    <input type="text" id="adress" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="date">Data:</label>
                    <input type="date" id="date" onChange={this.handleChange} />
                </div> 
                <div className="input-field">
                    <button className="btn">Criar</button>
                </div>
            </form>
        )
    }
}

export default CreatePlace;
