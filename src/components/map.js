import React from 'react';

const Map = () => {
  return (
    <div className='map'>
      <iframe
        title="Google Map"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.917498416348!2d0.0895076159070609!3d51.092665596302125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dedf7b7d7f17c1%3A0x188c1d7e2a578c68!2s51.093021%2C%200.091696!5e0!3m2!1sen!2suk!4v1648299894783!5m2!1sen!2suk"
        allowfullscreen=""
        style={{ borderRadius: '15px' }}
      ></iframe>
    </div>
  );
};

export default Map;