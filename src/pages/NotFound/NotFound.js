import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{width: '40%'}} src="https://i.ibb.co/G7vhsJP/kostiantyn-li-Fi-nhg5it-Cw-unsplash.jpg" alt="" />
            <Link to='/home'>Go Back</Link>
        </div>
    );
};

export default NotFound;