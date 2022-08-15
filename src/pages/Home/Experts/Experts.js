import React from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const ourExpert =[
        {img: 'https://i.ibb.co/9Gjhddd/car-mechanic-changing-wheels-car.jpg', name: 'Lulu', expertise: 'Speed'},
        {img: 'https://i.ibb.co/DDjdrQy/mechanic-holding-digital-tablet.jpg', name: 'Hulu', expertise: 'engine'},
        {img: 'https://i.ibb.co/T8DGTzk/smiling-mechanic-with-arms-crossed-spanner.jpg', name: 'Mulu', expertise: 'Oil'},
    ]
    return (
        <div id="experts" className='container'>
            <h2 className='text-danger'>Oue Expert</h2>
            <div className='row'>
                {
                  ourExpert.map(expert =><Expert expert={expert}/>)
                }
            </div>
        </div>
    );
};

export default Experts;