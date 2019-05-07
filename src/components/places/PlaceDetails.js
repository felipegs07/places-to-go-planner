import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const PlaceDetails = (props) => {
    if (!props.auth.uid) return <Redirect to="/" />

    return (
        <div className="container section place-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Place</span>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>01 de Janeiro de 2019</div>
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

export default connect(mapStateToProps)(PlaceDetails);