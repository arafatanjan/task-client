import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/bg--.png'
import banner2 from '../../assets/bg12.png'
import banner3 from '../../assets/Top bg.jpg'
import "./Banner.css"

const Banner = () => {
return (
    <div className="app-container">
    <Sidebar />
    <BannerShow />
  </div>
  );
};

function Sidebar() {
    const categories = [
      'Mens Shopping',
      'Womens Fashion',
      'Household',
      'Kitchen And Dining',
      'Computer Accessories',
      'Gadgets',
      'Jewellery',
      'Home Decor',
      'Cosmetics',
      'All Categories >>',
    ];
  
    return (
      <div className="sidebar">
        <ul className='d-lg-block d-md-block d-none'>
          {categories.map((category, index) => (
            <li key={index}>{category} <span>&gt;</span></li>
          ))}
        </ul>
      </div>
    );
  }
  
  function BannerShow() {
    return (
        <div className="banner">
        <img src={banner3} alt="Banner" className="banner-image" />
      </div>
    );
  }

export default Banner;









{/* <div>
  <Carousel>
      <Carousel.Item>
          <img
              className="d-block w-100"
              src={banner1}
              alt="First slide"
          />
          <Carousel.Caption>
              <h3></h3>
              <p></p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img
              className="d-block w-100 "
              src={banner2}
              style={{ height: '120%' }}
              alt="Second slide"
          />

          <Carousel.Caption>
              <h3></h3>
              <p></p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img
              className="d-block w-100 mx-auto"
              style={{ height: '40%' }}
              src={banner3}
              alt="Third slide"
          />

          <Carousel.Caption>
              <h3></h3>
              <p>

              </p>
          </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
</div> */}