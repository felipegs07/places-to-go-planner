import React from 'react';
import { Link } from 'react-router-dom';

const TourSummary = (props) => {
    return (
        <div className="col s12 m6">
            <Link to={'/tour/' + props.tour.id }>
                <div className="card tour-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">{props.tour.title}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TourSummary;