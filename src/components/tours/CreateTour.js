import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTour } from '../../store/actions/tourActions';

class CreateTour extends Component {
    state = {
        tourTitle: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTour(this.state);
        this.setState({
            tourTitle: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="white ptg-card ptg-card--sm">
                <div className="input-field">
                    <label htmlFor="tourTitle">Nome da Tour:</label>
                    <input type="text" id="tourTitle" onChange={this.handleChange} value={this.state.tourTitle} />
                </div> 
                <div className="input-field">
                    <button className="btn">Criar Tour</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTour: (tour) => dispatch(createTour(tour))
    }
}

export default connect(null, mapDispatchToProps)(CreateTour);
