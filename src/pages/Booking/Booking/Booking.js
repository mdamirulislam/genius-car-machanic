import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Place Booking {serviceId}</h1>
        </div>
    );
};

export default Booking;