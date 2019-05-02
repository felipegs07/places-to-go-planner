import React from 'react';
import PlaceList from '../places/PlaceList';
import CreatePlace from '../places/CreatePlace';

const TourBoard = (props) => {
    return (
        <div className="container">
            <div className="row">
                <h1>Tour {props.match.params.id}</h1>
                <div className="col s12 m5">
                    <CreatePlace tourId={props.match.params.id} />
                </div>
                <div className="col s12 m6">
                    <PlaceList />
                </div>
            </div>
        </div>
    )
}

export default TourBoard;