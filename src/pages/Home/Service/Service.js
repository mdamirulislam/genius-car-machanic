import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    return (
        <div className='service'>
            <img src={service.img} alt="" />
            <h1>Service {service.name}</h1>
            <h3>Price: {service.price}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus quaerat eveniet deserunt vitae culpa. Similique laboriosam eaque nostrum architecto impedit ratione est cum voluptatibus?</p>
<Link to={`/booking/${service.id}`}>            <button className='btn btn-warning '>book {service.name.toLowerCase()}</button>
</Link>            
        </div>
    );
};

export default Service;