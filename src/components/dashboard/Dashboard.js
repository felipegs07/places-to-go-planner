import React, { Component } from 'react';
import TourList from '../tours/TourList';
import CreateTour from '../tours/CreateTour';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Dashboard extends Component {
    render(){
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <CreateTour />
                        <TourList tours={this.props.tours} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tours: state.firestore.ordered.tours
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tours' }
    ])
)(Dashboard);