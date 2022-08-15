import React from 'react';

const Expert = ({expert}) => {
    return (
        <div className='col-lg-4 col-md-6 mt-5' >
            <img src={expert.img} alt="" />
            <h2>{expert.name}</h2>
            <p>{expert.expertise}</p>
        </div>
    );
};

export default Expert;