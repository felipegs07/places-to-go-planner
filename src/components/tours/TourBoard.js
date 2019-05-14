import React from 'react';
import PlaceList from '../places/PlaceList';
import CreatePlace from '../places/CreatePlace';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const TourBoard = (props) => {
    if (!props.auth.uid) return <Redirect to="/" />
    return (
        <div className="container">
            <div className="row">
                <h1>Tour {props.match.params.id}</h1>
                <div className="col s12 m5">
                    <CreatePlace tourId={props.match.params.id} />
                </div>
                <div className="col s12 m6">
                    <PlaceList tourId={props.match.params.id}  />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(TourBoard);