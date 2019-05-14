import React, { Component } from 'react';
import PlaceSummary from './PlaceSummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class PlaceList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        let placesLoaded = null;
        if (Object.entries(this.props.places).length !== 0) {
            let key = Object.keys(this.props.places)[0];
            let places = this.props.places[key];

            placesLoaded = places.map(place => {
                return (
                    <PlaceSummary place={place} key={place.id} />
                )
            })
        }

        return (
            <div className="place-list">
               { placesLoaded }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        places: state.firestore.ordered,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        console.log('firestore',props);
        return [
            { collection: `tours/${props.tourId}/places` }
        ]
    })
)(PlaceList);
