import React from 'react';
import { Link } from 'react-router-dom';

const DestinationPage = ({ destination }) => {
    return (
        <div>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <Link to="/">Back to Destinations</Link>
        </div>
    );
};