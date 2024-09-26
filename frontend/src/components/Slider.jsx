import React, { useState, useEffect } from 'react';

const Slider = () => {
  const images = [
   
    'https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg?w=1380&t=st=1727170540~exp=1727171140~hmac=895deb023799c3388ab278009c55859f0c3b3acfb4b24bb9efad45a25c7dfb7e',
    'https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-123899.jpg?w=1380&t=st=1727170569~exp=1727171169~hmac=f9260828d11e0c0522068b0efdb251922746ba69ba5c8cc113fc3b5ce5a920e0',
   
    'https://img.freepik.com/free-photo/surprised-man-open-shopping-bag-looking-amazed-receiving-gift-holiday-standing-turquoise_1258-180671.jpg?t=st=1727171142~exp=1727174742~hmac=795b4d31d6b8d1beb6a232fd949d5ff2658d2f38b97ece0e299d11e3a247a30a&w=1380',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden h-[70vh] ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover relative z-10"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
