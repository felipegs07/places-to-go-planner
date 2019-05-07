import React, { Component } from 'react';
import TourList from '../tours/TourList';
import CreateTour from '../tours/CreateTour';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


class Dashboard extends Component {
    render(){
        const { tours, auth } = this.props;
        if(!auth.uid){
            return <Redirect to="/signin" />
        }
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <CreateTour />
                        <TourList tours={tours} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tours: state.firestore.ordered.tours,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tours' }
    ])
)(Dashboard);