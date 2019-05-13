import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlace } from '../../store/actions/placeActions';

class CreatePlace extends Component {
    state = {
        title: '',
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
        this.props.createPlace(this.state);
        this.setState({
            title: '',
            adress: '',
            date: '',
            tourId: this.props.tourId
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="white ptg-card ptg-card--xsm">
                <h5 className="grey-text text-darken-3">Criar Lugar Para Ir</h5>
                <div className="input-field">
                    <label htmlFor="place">Lugar:</label>
                    <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
                </div> 
                <div className="input-field">
                    <label htmlFor="adress">Endereço:</label>
                    <input type="text" id="adress" onChange={this.handleChange} value={this.state.adress} />
                </div>
                <div className="input-field">
                    <label htmlFor="date">Data:</label>
                    <input type="date" id="date" onChange={this.handleChange} value={this.state.date} />
                </div> 
                <div className="input-field">
                    <button className="btn">Criar</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPlace: (place) => dispatch(createPlace(place))
    }
}

export default connect(null, mapDispatchToProps)(CreatePlace);
