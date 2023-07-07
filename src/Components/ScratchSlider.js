// Transition  happens in it and they are made from scratch
// tailwind ko convert kiya wo wala hy ye tutorial youtube
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function ScratchSlider() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={{ maxWidth: '780px', height: '500px', margin: 'auto', padding: '16px', position: 'relative' }}>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`, width: '100%', height: '100%', borderRadius: '20px', backgroundPosition: 'center', backgroundSize: 'cover', transition: 'background-image 0.5s ease' }}
      ></div>
      {/*Left Arrow */}
      <div style={{ '&:hover':{display:'block'}, position: 'absolute', top: '50%', transform: 'translateX(0) translateY(-50%)', left: '5px', fontSize: '2rem', borderRadius: '50%', padding: '0.5rem', backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'white', cursor: 'pointer' }}>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div style={{'&:hover':{display:'block'}, position: 'absolute', top: '50%', transform: 'translateX(0) translateY(-50%)', right: '5px', fontSize: '2rem', borderRadius: '50%', padding: '0.5rem', backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'white', cursor: 'pointer' }}>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div style={{display:'flex',top:4,justifyContent:'center',padding:'0 2'}}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            style={{fontSize:'2rem',cursor:'pointer'}}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScratchSlider;
