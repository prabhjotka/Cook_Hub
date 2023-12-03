import React from 'react';
import HomeCarousel from './HomeCarousel';

const HomePage = () => {

  return (
    <div>
      <HomeCarousel/>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={{ font:'verdana', padding: '10px 20px', fontSize: '16px', borderRadius: '15px', color: 'darkgreen', borderColor: 'darkgreen'}}>Continue As Guest</button>
      </div>
    </div>
  );
};

export default HomePage;