import React from 'react';
import TourSummary from './TourSummary';

const TourList = (props) => {
    return (
        <div className="tour-list section">
           {
               props.tours && props.tours.map(tour => {
                   return (
                        <TourSummary key={tour.id} tour={tour} />
                   )
               })
            }
        </div>
    )
}

export default TourList;