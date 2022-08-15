import React, { useEffect, useState } from 'react';
import Service from './../Service/Service';
import './Services.css'

const Services = () => {
  const [services, setServices] =  useState([]);
  useEffect(()=>{
    fetch('https://mocki.io/v1/81138518-d5ae-45ad-8fff-40ede994e3f6')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])

    return (
        <div id="services" className='services-container'>
     {
      services.map(service => <Service key={service.id} service={service} />)
     }
        </div>
    );
};

export default Services;











// const services = [
//     {id:1, name: 'car wash', price: 500, time: 2, img: 'https://ibb.co/zZTQJhy' },
//     { id:2, name: 'engine service', price: 100, time: 1, img: 'https://ibb.co/vzNzGKd' },
//     { id:3, name: 'oil chang', price: 200, time: 1, img: 'https://ibb.co/FXzZpFF' },
//     { id:4, name: 'speed boost', price: 1500, time: 3, img: 'https://ibb.co/st5MgXN' },
//     { id:5, name: 'tire change', price: 200, time: 0.5, img: ' https://ibb.co/zPJqy5B' },
//     { id:6, name: 'any welding', price: 300, time: 1, img: 'https://ibb.co/VJWrhb5' }
// ]

// const allData = [
//     {
//       "id": 1,
//       "name": "car wash",
//       "price": 500,
//       "time": 2,
//       "img": "https://ibb.co/zZTQJhy"
//     },
//     {
//       "id": 2,
//       "name": "engine service",
//       "price": 100,
//       "time": 1,
//       "img": "https://ibb.co/vzNzGKd"
//     },
//     {
//       "id": 3,
//       "name": "oil chang",
//       "price": 200,
//       "time": 1,
//       "img": "https://ibb.co/FXzZpFF"
//     },
//     {
//       "id": 4,
//       "name": "speed boost",
//       "price": 1500,
//       "time": 3,
//       "img": "https://ibb.co/st5MgXN"
//     },
//     {
//       "id": 5,
//       "name": "tire change",
//       "price": 200,
//       "time": 0.5,
//       "img": " https://ibb.co/zPJqy5B"
//     },
//     {
//       "id": 6,
//       "name": "any welding",
//       "price": 300,
//       "time": 1,
//       "img": "https://ibb.co/VJWrhb5"
//     }
//   ]