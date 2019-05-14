import React from 'react';

const PlaceSummary = (props) => {
    return (
        <div className="card place-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{ props.place.title }</span>
                <p><b>Address: </b>{ props.place.adress }</p>
                <p className="grey-text">{ props.place.date }</p>
            </div>
        </div>
    )
}

export default PlaceSummary;