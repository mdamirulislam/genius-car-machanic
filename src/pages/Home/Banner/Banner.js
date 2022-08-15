import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../img/banner1.jpg'
import banner2 from '../../../img/banner2.jpg'
import banner3 from '../../../img/banner3.jpg'
const Banner = () => {
    return (
      <div className='banner-container'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    );
}; 

export default Banner;




{/* <a href="https://ibb.co/h8WRjkf"><img src="https://i.ibb.co/h8WRjkf/banner1.jpg" alt="banner1" border="0"></a> <a href="https://ibb.co/RjY8NyF"><img src="https://i.ibb.co/RjY8NyF/banner2.jpg" alt="banner2" border="0"></a> <a href="https://ibb.co/264vzrx"><img src="https://i.ibb.co/264vzrx/banner3.jpg" alt="banner3" border="0"></a> */}