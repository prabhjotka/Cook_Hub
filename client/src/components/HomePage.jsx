import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const images = [
    './server/public/images/Avocado_Toast.jpeg',
    './server/public/images/Caprese_Salad.jpeg',
    './server/public/images/Spicy_Shrimp_Tacos.jpeg',
    // Add more image URLs as needed
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...carouselSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Get Started</button>
      </div>
    </div>
  );
};

export default HomePage;